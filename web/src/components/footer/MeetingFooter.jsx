import {
  Mic,
  MicOff,
  VideoLabel,
  Videocam,
  VideocamOff,
  WebAssetOff,
} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import {
  ActionWrapper,
  Btn,
  BtnAct,
  Container,
  Div,
  Icons,
  Wrapper,
} from "./meetingFooter.styles";
import * as webRTCGroupCallHandler from "../../utils/webRTC/webRTCGroupCallHandler";
import {
  hangUp,
  switchForScreenSharingStream,
} from "../../utils/webRTC/webRTCHandler";
import { switchForScreenSharingStreamInGroup } from "../../utils/webRTC/webRTCGroupCallHandler";
import {
  callStates,
  setCallNotification,
} from "../../store/actions/callActions";
import IncomingCallDialog from "../moreModal/IncomingCallDialog";
import HangUpCallDialog from "../moreModal/HangUpCallDialog";
import RejectedCallDialog from "../moreModal/RejectedCallDialog";
import NotificationMsgDialog from "../moreModal/NotificationMsgDialog";
import store from "../../store/store";

const MeetingFooter = ({
  localStream,
  screenSharingActive,
  localCameraEnabled,
  localMicrophoneEnabled,
  setCameraEnabled,
  setMicrophoneEnabled,
  callRejected,
  hideCallRejectedDialog,
  groupCallActive,
  callState,
  setFullScreen,
  notificationMsg,
  ...props
}) => {
  // const [showMore, setShowMore] = useState(false);
  // const [showEndModal, setShowEndModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (notificationMsg.trim()) {
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      setTimeout(() => {
        store.dispatch(setCallNotification(""));
      }, 4000);
    }
  }, [notificationMsg]);

  const handleMicrophoneBtnClicked = () => {
    const micEnabled = localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicrophoneEnabled(!micEnabled);
  };

  const handleCameraBtnClicked = () => {
    const cameraEnabled = localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  const handleScreenSharingButtonPressed = async () => {
    if (groupCallActive) {
      await switchForScreenSharingStreamInGroup();
    } else {
      await switchForScreenSharingStream();
    }
  };

  const handleEndCall = () => {
    if (groupCallActive) {
      webRTCGroupCallHandler.leaveGroupCall();
      return;
    }
    hangUp();
  };

  return (
    <Container>
      {showNotification && (
        <NotificationMsgDialog
          notificationMsg={notificationMsg}
          setShowNotification={setShowNotification}
        />
      )}

      {props.callingDialogVisible && <HangUpCallDialog />}
      {callState === callStates.CALL_REQUESTED && (
        <IncomingCallDialog
          title={`Incoming call from: ${props.callerUsername}`}
        />
      )}

      {callRejected.rejected && (
        <RejectedCallDialog
          reason={callRejected.reason}
          hideCallRejectedDialog={hideCallRejectedDialog}
        />
      )}
      <Wrapper>
        <Div>
          <ActionWrapper>
            <Tooltip
              title={localMicrophoneEnabled ? "Mute" : "UnMute"}
              placement="top"
            >
              <Icons
                onClick={() =>
                  handleMicrophoneBtnClicked(!localMicrophoneEnabled)
                }
                index={0}
              >
                {localMicrophoneEnabled ? (
                  <Mic style={{ color: "white" }} />
                ) : (
                  <MicOff style={{ color: "white" }} />
                )}
              </Icons>
            </Tooltip>
            <Tooltip
              title={localCameraEnabled ? "Turn Off Video" : "Turn On Video"}
              placement="top"
            >
              <Icons
                onClick={() => handleCameraBtnClicked(!localCameraEnabled)}
                index={1}
              >
                {localCameraEnabled ? (
                  <Videocam style={{ color: "white" }} />
                ) : (
                  <VideocamOff style={{ color: "white" }} />
                )}
              </Icons>
            </Tooltip>
            <Tooltip title="Share" placement="top">
              {!screenSharingActive ? (
                <Icons index={1} onClick={handleScreenSharingButtonPressed}>
                  <VideoLabel style={{ color: "white" }} />
                </Icons>
              ) : (
                <Icons index={1} onClick={handleScreenSharingButtonPressed}>
                  <WebAssetOff style={{ color: "white" }} />
                </Icons>
              )}
            </Tooltip>

            {/*<MoreIcon>
              <MoreIcon>
                <Tooltip title="More" placement="top">
                  <Icons index={5} onClick={() => setShowMore(!showMore)}>
                    <MoreHoriz style={{ color: "#0060ff" }} />
                  </Icons>
                </Tooltip>
              </MoreIcon>
              {showMore && (
                <More
                  setShowMore={setShowMore}
                  showMore={showMore}
                  setShowEndModal={setShowEndModal}
                />
              )}
            </MoreIcon>*/}
          </ActionWrapper>
          <BtnAct>
            {(callState === callStates.CALL_IN_PROGRESS || groupCallActive) && (
              <Btn onClick={handleEndCall}>End Call</Btn>
            )}
          </BtnAct>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default MeetingFooter;
