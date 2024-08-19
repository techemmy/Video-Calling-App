import "dotenv/config";
import express from "express";
import * as socket from "socket.io";
import { ExpressPeerServer } from "peer";
import * as groupCallHandler from "./groupCallHandler.js";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import twilio from "twilio";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
  }),
);

app.get("/", (req, res) => {
  res.send({ api: "VideoTalker API" });
});

app.get("/api/get-turn-credentials", async (req, res) => {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    if (!accountSid || !authToken) {
      return res.status(401).send({ error: "Twilio config data not complete" });
    }

    const token = await twilio(accountSid, authToken).tokens.create();
    res.send({ token });
  } catch (error) {
    res.send({ token: { iceServers: [] } });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use("/peerjs", peerServer);
groupCallHandler.createPeerServerListeners(peerServer);

const io = new socket.Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let peers = [];
let groupCallRooms = [];
let groupCallMembers = {};

const broadcastEventTypes = {
  ACTIVE_USERS: "ACTIVE_USERS",
  GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS",
};

io.on("connection", (socket) => {
  socket.emit("connection", null);
  console.log("new user connected");

  socket.on("register-new-user", (data) => {
    peers.push({
      username: data.username,
      socketId: data.socketId,
    });
    console.log("registered user!");
    console.log(peers);

    io.sockets.emit("broadcast", {
      event: broadcastEventTypes.ACTIVE_USERS,
      activeUsers: peers,
    });

    io.sockets.emit("broadcast", {
      event: broadcastEventTypes.GROUP_CALL_ROOMS,
      groupCallRooms,
    });
  });

  socket.on("disconnect", () => {
    peers = peers.filter((peer) => peer.socketId !== socket.id);

    io.sockets.emit("broadcast", {
      event: broadcastEventTypes.ACTIVE_USERS,
      activeUsers: peers,
    });

    groupCallRooms.filter((room) => room.socketId !== socket.id);
    io.sockets.emit("broadcast", {
      event: broadcastEventTypes.GROUP_CALL_ROOMS,
      groupCallRooms,
    });
  });

  // listeners related with direct calls
  socket.on("pre-offer", (data) => {
    console.log("pre-offer handled");
    io.to(data.callee.socketId).emit("pre-offer", {
      callerUsername: data.caller.username,
      callerSocketId: socket.id,
    });
  });

  socket.on("pre-offer-answer", (data) => {
    console.log("handling pre offer answer");
    io.to(data.callerSocketId).emit("pre-offer-answer", {
      answer: data.answer,
    });
  });

  socket.on("webRTC-offer", (data) => {
    console.log("handling webRTC data");
    io.to(data.calleeSocketId).emit("webRTC-offer", {
      offer: data.offer,
    });
  });

  socket.on("webRTC-answer", (data) => {
    console.log("handling webRTC answer");
    io.to(data.callerSocketId).emit("webRTC-answer", {
      answer: data.answer,
    });
  });

  socket.on("webRTC-candidate", (data) => {
    console.log("handling ICE candidate");
    io.to(data.connectedUserSocketId).emit("webRTC-candidate", {
      candidate: data.candidate,
    });
  });

  socket.on("user-hanged-up", (data) => {
    io.to(data.connectedUserSocketId).emit("user-hanged-up");
  });

  // listeners related w/ group call
  socket.on("group-call-register", (data) => {
    const roomId = uuidv4();
    socket.join(roomId);

    const newGroupCallRoom = {
      peerId: data.peerId,
      hostName: data.user.username,
      socketId: socket.id,
      roomId,
    };

    groupCallRooms.push(newGroupCallRoom);
    groupCallMembers[roomId] = [data.user];

    socket.emit("group-created", { roomId });
    io.sockets.emit("broadcast", {
      event: broadcastEventTypes.GROUP_CALL_ROOMS,
      groupCallRooms,
    });
  });

  socket.on("group-call-join-request", (data) => {
    io.to(data.roomId).emit("group-call-join-request", {
      peerId: data.peerId,
      streamId: data.streamId,
      roomId: data.roomId,
    });
    socket.join(data.roomId);

    groupCallMembers[data.roomId].push(data.user);
    io.to(data.roomId).emit("group-call-members", {
      groupMembers: groupCallMembers[data.roomId],
    });
  });

  socket.on("group-call-user-left", (data) => {
    socket.leave(data.roomId);

    groupCallMembers[data.roomId] = groupCallMembers[data.roomId]?.filter(
      (member) => member.username !== data.username,
    );
    io.to(data.roomId).emit("group-call-user-left", {
      groupMembers: groupCallMembers[data.roomId],
      streamId: data.streamId,
    });
  });

  socket.on("group-call-closed-by-host", (data) => {
    groupCallRooms = groupCallRooms.filter(
      (room) => room.roomId !== data.roomId,
    );
    delete groupCallMembers[data.roomId];

    io.sockets.emit("broadcast", {
      event: broadcastEventTypes.GROUP_CALL_ROOMS,
      groupCallRooms,
    });
  });

  socket.on("group-share-screen", (data) => {
    socket.to(data.roomId).emit("group-share-screen", data);
  });
});
