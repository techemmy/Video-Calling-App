/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import time from "../../assets/Group 42.png";
import zoom from "../../assets/Group 41.png";
import add from "../../assets/add.png";
import { useEffect, useRef, useState } from "react";
import {
  AvarterName,
  Container,
  HostVideo,
  HostVideoPlaceholder,
  HostVideoStream,
  Icon,
  IconAdd,
  IconZoom,
  Name,
  P,
  PlaceHolderTextContainer,
  Record,
  VideoBx,
} from "./mainScreen.styles";
import JoinedUsers from "../joinedUsers/JoinedUsers";
import { Tooltip } from "@mui/material";
import * as webRTCGroupCallHandler from "../../utils/webRTC/webRTCGroupCallHandler";
import { callStates } from "../../store/actions/callActions";

const MainScreen = ({
  localStream,
  username,
  remoteStream,
  localCameraEnabled,
  callState,
  groupCallActive,
  groupCallStreams,
}) => {
  const [fullScreen, setFullScreen] = useState(true);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    if (localStream && localCameraEnabled) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream, localCameraEnabled]);

  useEffect(() => {
    if (remoteStream) {
      const remoteVideo = remoteVideoRef.current;
      remoteVideo.srcObject = remoteStream;

      remoteVideo.onloadedmetadata = () => {
        remoteVideo.play();
      };
    }
  }, [remoteStream]);

  useEffect(() => {
    if (groupCallActive) {
      setFullScreen(false);
    } else {
      setFullScreen(true);
    }
  }, [groupCallActive]);

  const createRoom = () => {
    webRTCGroupCallHandler.createNewGroupCall();
  };

  const handleFullscreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <>
      <Container fullScreen={fullScreen}>
        <VideoBx>
          <HostVideo>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `${remoteStream ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}`,
                overflow: "scroll",
                columnGap: "1rem",
              }}
            >
              {remoteStream && (
                <HostVideoStream
                  fullScreen={fullScreen}
                  ref={remoteVideoRef}
                  alt="Remote video stream"
                  autoPlay
                  muted
                  playsInline
                  webkitPlaysInline
                />
              )}

              {localCameraEnabled ? (
                <HostVideoStream
                  ref={localVideoRef}
                  fullScreen={fullScreen}
                  alt="Your video stream"
                  autoPlay
                  muted
                  playsInline
                  webkitPlaysInline
                />
              ) : (
                <HostVideoPlaceholder fullScreen={fullScreen}>
                  <PlaceHolderTextContainer>
                    <P>{username}</P>
                  </PlaceHolderTextContainer>
                </HostVideoPlaceholder>
              )}
            </div>
            <Record>
              <Icon src={time} alt="dgggg" />
            </Record>
            <AvarterName fullScreen={fullScreen}>
              <Name>{username || "Login to continue"}</Name>
            </AvarterName>

            {!remoteStream && groupCallActive && (
              <Tooltip
                title={
                  fullScreen
                    ? "Open room members view"
                    : "Close room members view"
                }
                placement="top"
              >
                <IconZoom onClick={handleFullscreen} src={zoom} alt="dgggg" />
              </Tooltip>
            )}

            {!groupCallActive &&
              localStream &&
              callState !== callStates.CALL_IN_PROGRESS && (
                <Tooltip title="Create Room" placement="top">
                  <IconAdd
                    onClick={createRoom}
                    fullScreen={fullScreen}
                    src={add}
                    alt="dgggg"
                  />
                </Tooltip>
              )}
          </HostVideo>
          {!fullScreen && groupCallActive && (
            <JoinedUsers groupCallStreams={groupCallStreams} />
          )}
        </VideoBx>
      </Container>
    </>
  );
};

export default MainScreen;
