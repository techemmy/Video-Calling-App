let turnServers = [];

export function getTurnServers() {
  return turnServers;
}

export function setTurnServers(servers) {
  turnServers = [
    ...servers,
    { urls: "stun:stun.l.google.com:19302" },
    {
      urls: "stun:stun2.l.google.com:19302",
    },
    {
      urls: "stun:stun3.l.google.com:19302",
    },
    {
      urls: "stun:stun4.l.google.com:19302",
    },
    { url: "stun:stun.1und1.de:3478" },
  ];
}
