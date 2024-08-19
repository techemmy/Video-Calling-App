import {
  callStates,
  clearGroupCallData,
  setCallNotification,
  setCallState,
  setGroupCallActive,
  setGroupCallHostname,
  setGroupCallIncomingStreams,
  setGroupCallMembers,
  setScreenSharingActive,
} from "../../store/actions/callActions";
import store from "../../store/store";
import * as wss from "../wssConnection/wssConnection";
import { getTurnServers } from "./TURN";

let myPeer;
let myPeerId;
let groupCallRoomId;
let groupCallHost = false;
let screenSharingStream;
let mediaConnections = [];

export const connectWithMyPeer = () => {
  myPeer = new window.Peer(undefined, {
    // path: "/peerjs",
    // host: "/",
    // port: "5000",
    config: {
      iceServers: [
        ...getTurnServers(),
        { url: "stun:stun.1und1.de:3478" },
        { urls: "stun:stun.l.google.com:19302" },
        {
          urls: "stun:stun1.l.google.com:19302",
        },
        {
          urls: "stun:stun2.l.google.com:19302",
        },
        {
          urls: "stun:stun3.l.google.com:19302",
        },
        {
          urls: "stun:stun4.l.google.com:19302",
        },
      ],
    },
  });

  myPeer.on("open", (id) => {
    console.log("successfully connected with peer server");
    console.log(id);
    myPeerId = id;
  });

  myPeer.on("call", (call) => {
    const mediaConnectionExists = mediaConnections.find(
      (conn) => call.peer === conn?.peer,
    );
    if (!mediaConnectionExists) {
      mediaConnections.push(call);
    }
    call.answer(store.getState().call.localStream);
    call.on("stream", (incomingStream) => {
      const streams = store.getState().call.groupCallStreams;
      const stream = streams.find((stream) => stream.id === incomingStream.id);

      if (!stream) {
        addVideoStream(incomingStream);
      }
    });
  });

  myPeer.on("disconnected", () => {
    console.log("Peer disconnected", myPeer);
    store.dispatch(setCallNotification("You got disconnected."));
  });

  myPeer.on("error", (err) => {
    console.log("Peer error", err);
  });
};

export const createNewGroupCall = () => {
  groupCallHost = true;
  const username = store.getState().dashboard.username;
  wss.registerGroupCall({
    user: {
      username,
      screenSharingActive: false,
    },
    peerId: myPeerId,
  });

  store.dispatch(setGroupCallActive(true));
  store.dispatch(setGroupCallHostname(username));
  store.dispatch(setCallState(callStates.CALL_IN_PROGRESS));
  store.dispatch(setGroupCallMembers([]));
};

export const setGroupCallId = (data) => {
  groupCallRoomId = data.roomId;
};

export const joinGroupCall = (hostSocketId, roomId, hostName) => {
  const localStream = store.getState().call.localStream;
  groupCallRoomId = roomId;
  wss.userWantsToJoinGroupCall({
    peerId: myPeerId,
    hostSocketId,
    roomId,
    streamId: localStream.id,
    user: {
      username: store.getState().dashboard.username,
      screenSharingActive: false,
    },
  });

  store.dispatch(setGroupCallActive(true));
  store.dispatch(setGroupCallHostname(hostName));
  store.dispatch(setCallState(callStates.CALL_IN_PROGRESS));
};

export const connectToNewUser = (data) => {
  const localStream = store.getState().call.localStream;

  const call = myPeer.call(data.peerId, localStream);
  const mediaConnectionExists = mediaConnections.find(
    (conn) => data.peerId === conn?.peer,
  );

  if (!mediaConnectionExists) {
    mediaConnections.push(call);
  }

  call.on("stream", (incomingStream) => {
    const streams = store.getState().call.groupCallStreams;
    const stream = streams.find((stream) => stream.id === incomingStream.id);

    if (!stream) {
      addVideoStream(incomingStream);
    }
  });
};

export const updateGroupMembers = (data) => {
  store.dispatch(setGroupCallMembers(data.groupMembers));
};

export const leaveGroupCall = () => {
  if (groupCallHost) {
    wss.groupCallClosedByHost({
      roomId: groupCallRoomId,
      peerId: myPeerId,
    });
  } else {
    wss.userLeftGroupCall({
      username: store.getState().dashboard.username,
      streamId: store.getState().call.localStream.id,
      roomId: groupCallRoomId,
    });
  }

  clearGroupData();
};

export const clearGroupData = () => {
  groupCallRoomId = null;
  groupCallHost = null;
  store.dispatch(clearGroupCallData());
  myPeer?.destroy();
  connectWithMyPeer();

  const localStream = store.getState().call.localStream;
  localStream.getVideoTracks()[0].enabled = true;
  localStream.getAudioTracks()[0].enabled = true;
};

export const removeInactiveStream = (data) => {
  // TODO:: 2: ensure user's stream is removed
  const groupCallStreams = store
    .getState()
    .call.groupCallStreams.filter((stream) => stream.id !== data.streamId);

  store.dispatch(setGroupCallIncomingStreams(groupCallStreams));
};

export const addVideoStream = (incomingStream) => {
  const groupCallStreams = [
    ...store.getState().call.groupCallStreams,
    incomingStream,
  ];
  store.dispatch(setGroupCallIncomingStreams(groupCallStreams));
};

export const checkActiveGroupCall = () => {
  if (store.getState().call.groupCallActive) {
    return groupCallRoomId;
  }

  return false;
};

export const switchForScreenSharingStreamInGroup = async () => {
  if (!store.getState().call.screenSharingActive) {
    try {
      screenSharingStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      store.dispatch(setScreenSharingActive(true));

      mediaConnections.forEach(({ peerConnection }) => {
        const senders = peerConnection.getSenders();
        const sender = senders.find(
          (sender) =>
            sender.track.kind == screenSharingStream.getVideoTracks()[0].kind,
        );
        sender.replaceTrack(screenSharingStream.getVideoTracks()[0]);
        wss.shareScreenInGroupCall({
          roomId: groupCallRoomId,
          message: `${store.getState().dashboard.username} started sharing their screen`,
        });
      });
    } catch (err) {
      console.error(
        "Error occured when trying to get screen sharing stream",
        err,
      );
    }
  } else {
    const localStream = store.getState().call.localStream;

    mediaConnections.forEach(({ peerConnection }) => {
      const senders = peerConnection.getSenders();
      const sender = senders.find(
        (sender) => sender.track.kind == localStream.getVideoTracks()[0].kind,
      );
      sender.replaceTrack(localStream.getVideoTracks()[0]);
    });
    store.dispatch(setScreenSharingActive(false));
    screenSharingStream?.getTracks()?.forEach((track) => track.stop());
    wss.shareScreenInGroupCall({
      roomId: groupCallRoomId,
      message: `${store.getState().dashboard.username} stopped sharing their screen`,
    });
  }
};

export const notify = (data) => {
  store.dispatch(setCallNotification(data.message));
};
