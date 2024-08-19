import {
  callStates,
  resetCallDataState,
  setCallRejected,
  setCallState,
  setCallerUsername,
  setCallingDialogVisible,
  setLocalStream,
  setMessage,
  setRemoteStream,
  setScreenSharingActive,
} from "../../store/actions/callActions";
import store from "../../store/store";
import * as wss from "../wssConnection/wssConnection";
import { getTurnServers } from "./TURN";

const preOfferAnswers = {
  CALL_ACCEPTED: "CALL_ACCEPTED",
  CALL_REJECTED: "CALL_REJECTED",
  CALL_NOT_AVAILABLE: "CALL_NOT_AVAILABLE",
};

const defaultConstraints = {
  video: {
    width: 480,
    height: 360,
  },
  audio: true,
};

let connectedUserSocketId;
let peerConnection;
let dataChannel;

export const getLocalStream = () => {
  navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      store.dispatch(setCallState(callStates.CALL_AVAILABLE));
      createPeerConnection();
    })
    .catch((err) => {
      console.log("an error occured when trying to get access to local stream");
      console.log(err);
    });
};

const createPeerConnection = () => {
  const configuration = {
    iceServers: [...getTurnServers()],
  };

  peerConnection = new RTCPeerConnection(configuration);
  const localStream = store.getState().call.localStream;

  for (const track of localStream.getTracks()) {
    peerConnection.addTrack(track, localStream);
  }

  peerConnection.ontrack = ({ streams: [stream] }) => {
    store.dispatch(setRemoteStream(stream));
  };

  // incoming data channel messages
  peerConnection.ondatachannel = (event) => {
    const dataChannel = event.channel;

    dataChannel.onopen = () => {
      console.log("peer connection is ready to receive data channel messages");
    };

    dataChannel.onmessage = (event) => {
      store.dispatch(setMessage(true, event.data));
    };
  };

  dataChannel = peerConnection.createDataChannel("chat");

  dataChannel.onopen = (event) => {
    console.log("chat data channel successfully opened");
  };

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      wss.sendWebRTCCandidate({
        candidate: event.candidate,
        connectedUserSocketId,
      });
    }
  };

  peerConnection.onconnectionstatechange = (event) => {
    if (peerConnection.connectionState === "connected") {
      console.log("successfully connected with other peer");
    }
  };
};

export const callToOtherUser = (calleeDetails) => {
  connectedUserSocketId = calleeDetails.socketId;
  store.dispatch(setCallState(callStates.CALL_IN_PROGRESS));
  store.dispatch(setCallerUsername(calleeDetails.username));
  store.dispatch(setCallingDialogVisible(true));
  wss.sendPreOffer({
    callee: calleeDetails,
    caller: {
      username: store.getState().dashboard.username,
    },
  });
};

export const handlePreOffer = (data) => {
  if (checkIfCallIsPossible()) {
    connectedUserSocketId = data.callerSocketId;
    store.dispatch(setCallerUsername(data.callerUsername));
    store.dispatch(setCallState(callStates.CALL_REQUESTED));
  } else {
    wss.sendPreOfferAnswer({
      callerSocketId: data.callerSocketId,
      answer: preOfferAnswers.CALL_NOT_AVAILABLE,
    });
  }
};

export const acceptIncomingCallRequest = () => {
  wss.sendPreOfferAnswer({
    callerSocketId: connectedUserSocketId,
    answer: preOfferAnswers.CALL_ACCEPTED,
  });

  store.dispatch(setCallState(callStates.CALL_IN_PROGRESS));
};

export const rejectIncomingCallRequest = () => {
  wss.sendPreOfferAnswer({
    callerSocketId: connectedUserSocketId,
    answer: preOfferAnswers.CALL_REJECTED,
  });
  resetCallData();
};

export const handlePreOfferAnswer = (data) => {
  store.dispatch(setCallingDialogVisible(false));
  if (data.answer === preOfferAnswers.CALL_ACCEPTED) {
    sendOffer();
  } else {
    let rejectionReason;
    if (data.answer === preOfferAnswers.CALL_NOT_AVAILABLE) {
      rejectionReason = "Callee is not able to pickup the call right now";
    } else {
      rejectionReason = "Call rejected by the callee";
    }

    store.dispatch(setCallerUsername(""));
    store.dispatch(
      setCallRejected({ rejected: true, reason: rejectionReason }),
    );

    resetCallData();
  }
};

export const sendOffer = async () => {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  wss.sendWebRTCOffer({
    calleeSocketId: connectedUserSocketId,
    offer: offer,
  });
};

export const handleOffer = async (data) => {
  await peerConnection.setRemoteDescription(data.offer);
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);
  wss.sendWebRTCAnswer({ callerSocketId: connectedUserSocketId, answer });
};

export const handleAnswer = async (data) => {
  await peerConnection.setRemoteDescription(data.answer);
};

export const handleCandidate = async (data) => {
  try {
    await peerConnection.addIceCandidate(data.candidate);
  } catch (error) {
    console.log(
      "error occured when trying to add received ice candidate",
      error,
    );
  }
};

export const checkIfCallIsPossible = () => {
  if (
    store.getState().call.localStream === null ||
    store.getState().call.callState !== callStates.CALL_AVAILABLE
  ) {
    return false;
  }
  return true;
};

let screenSharingStream;

export const switchForScreenSharingStream = async () => {
  if (!store.getState().call.screenSharingActive) {
    try {
      screenSharingStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      store.dispatch(setScreenSharingActive(true));
      const senders = peerConnection.getSenders();
      const sender = senders.find(
        (sender) =>
          sender.track.kind == screenSharingStream.getVideoTracks()[0].kind,
      );
      sender.replaceTrack(screenSharingStream.getVideoTracks()[0]);
    } catch (err) {
      console.error(
        "Error occured when trying to get screen sharing stream",
        err,
      );
    }
  } else {
    const localStream = store.getState().call.localStream;

    const senders = peerConnection.getSenders();
    const sender = senders.find(
      (sender) => sender.track.kind == localStream.getVideoTracks()[0].kind,
    );
    sender.replaceTrack(localStream.getVideoTracks()[0]);
    store.dispatch(setScreenSharingActive(false));
    screenSharingStream.getTracks().forEach((track) => track.stop());
  }
};

export const handleUserHangedUp = () => {
  resetCallDataAfterHangUp();
};

export const hangUp = () => {
  wss.sendUserHangedUp({
    connectedUserSocketId,
  });

  resetCallDataAfterHangUp();
};

export const resetCallDataAfterHangUp = () => {
  peerConnection.close();
  peerConnection = null;
  createPeerConnection();
  resetCallData();

  const localStream = store.getState().call.localStream;
  localStream.getVideoTracks()[0].enabled = true;
  localStream.getAudioTracks()[0].enabled = true;

  if (store.getState().call.screenSharingActive) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
  }

  store.dispatch(resetCallDataState());
};

export const resetCallData = () => {
  connectedUserSocketId = null;
  store.dispatch(setCallState(callStates.CALL_AVAILABLE));
};

export const sendMessageUsingDataChannel = (message) => {
  dataChannel.send(message);
};
