import socketClient from "socket.io-client";
import * as dashboardActions from "../../store/actions/dashboardActions";
import store from "../../store/store";
import * as webRTCHandler from "../webRTC/webRTCHandler";
import * as webRTCGroupCallHandler from "../webRTC/webRTCGroupCallHandler";

const SERVER = import.meta.env.VITE_SERVER_URL;
if (!SERVER) {
  throw new Error("BACKEND SERVER URL not set in app environment");
}

const broadcastEventTypes = {
  ACTIVE_USERS: "ACTIVE_USERS",
  GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS",
};

let socket;

export const connectWithWebSocket = () => {
  socket = socketClient(SERVER);

  socket.on("connection", () => {
    console.log("successfully connected with server websocket");
    console.log(socket.id);
  });

  socket.on("broadcast", (data) => {
    handleBroadcastData(data);
  });

  socket.on("pre-offer", (data) => {
    webRTCHandler.handlePreOffer(data);
  });

  socket.on("pre-offer-answer", (data) => {
    webRTCHandler.handlePreOfferAnswer(data);
  });

  socket.on("webRTC-offer", (data) => {
    webRTCHandler.handleOffer(data);
  });

  socket.on("webRTC-answer", (data) => {
    webRTCHandler.handleAnswer(data);
  });

  socket.on("webRTC-candidate", (data) => {
    webRTCHandler.handleCandidate(data);
  });

  socket.on("user-hanged-up", () => {
    webRTCHandler.handleUserHangedUp();
  });

  // listeners related w/ group calls
  socket.on("group-created", (data) => {
    webRTCGroupCallHandler.setGroupCallId(data);
  });

  socket.on("group-call-join-request", (data) => {
    webRTCGroupCallHandler.connectToNewUser(data);
  });

  socket.on("group-call-members", (data) => {
    webRTCGroupCallHandler.updateGroupMembers(data);
  });

  socket.on("group-call-user-left", (data) => {
    webRTCGroupCallHandler.removeInactiveStream(data);
    if (data?.groupMembers) {
      webRTCGroupCallHandler.updateGroupMembers(data);
    }
  });

  socket.on("group-share-screen", (data) => {
    webRTCGroupCallHandler.notify(data);
  });
};

export const registerNewUser = (username) => {
  socket.emit("register-new-user", { username, socketId: socket.id });
};

// emitting events related with direct call
export const sendPreOffer = (data) => {
  socket.emit("pre-offer", data);
};

export const sendPreOfferAnswer = (data) => {
  socket.emit("pre-offer-answer", data);
};

export const sendWebRTCOffer = (data) => {
  socket.emit("webRTC-offer", data);
};

export const sendWebRTCAnswer = (data) => {
  socket.emit("webRTC-answer", data);
};

export const sendWebRTCCandidate = (data) => {
  socket.emit("webRTC-candidate", data);
};

export const sendUserHangedUp = (data) => {
  socket.emit("user-hanged-up", data);
};

// emitting events related w/ group calls

export const registerGroupCall = (data) => {
  socket.emit("group-call-register", data);
};

export const userWantsToJoinGroupCall = (data) => {
  socket.emit("group-call-join-request", data);
};

export const userLeftGroupCall = (data) => {
  socket.emit("group-call-user-left", data);
};

export const groupCallClosedByHost = (data) => {
  socket.emit("group-call-closed-by-host", data);
};

export const shareScreenInGroupCall = (data) => {
  socket.emit("group-share-screen", data);
};

const handleBroadcastData = (data) => {
  switch (data.event) {
    case broadcastEventTypes.ACTIVE_USERS:
      const activeUsers = data.activeUsers.filter(
        (user) => user.socketId !== socket.id,
      );
      store.dispatch(dashboardActions.setActiveUsers(activeUsers));
      break;

    case broadcastEventTypes.GROUP_CALL_ROOMS:
      const groupCallRooms = data.groupCallRooms.filter(
        (room) => room?.socketId !== socket.id,
      );
      const activeGroupCallRoomId =
        webRTCGroupCallHandler.checkActiveGroupCall();

      if (activeGroupCallRoomId) {
        const room = data.groupCallRooms.find(
          (room) => room.roomId === activeGroupCallRoomId,
        );

        if (!room) {
          webRTCGroupCallHandler.clearGroupData();
        }
      }

      store.dispatch(dashboardActions.setGroupCalls(groupCallRooms));
      break;

    default:
      break;
  }
};
