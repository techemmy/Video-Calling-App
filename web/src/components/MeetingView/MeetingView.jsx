/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import MeetingHeader from "../header/MeetingHeader";
import MeetingFooter from "../footer/MeetingFooter";
import MainScreen from "../mainScreen/MainScreen";
import ChatBox from "../chatBox/ChatBox";
import { Container, Left, Right, Wrapper } from "./meetingView.styles";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import { setTurnServers } from "../../utils/webRTC/TURN";
import * as webRTCHandler from "../../utils/webRTC/webRTCHandler";
import * as webRTCGroupCallHandler from "../../utils/webRTC/webRTCGroupCallHandler";
import {
  setCallRejected,
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled,
  setMessage,
} from "../../store/actions/callActions";
import { connect } from "react-redux";

const MeetingView = ({ setDarkMode, darkMode, ...props }) => {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/get-turn-credentials`)
      .then(async (resp) => {
        const data = await resp.json();
        setTurnServers(data.token.iceServers);
        webRTCHandler.getLocalStream();
        webRTCGroupCallHandler.connectWithMyPeer();
      })
      .catch(console.error);
  }, []);

  return (
    <Container>
      <MeetingHeader {...props} setDarkMode={setDarkMode} darkMode={darkMode} />
      <Wrapper>
        <Left>
          <MainScreen {...props} />
          <MeetingFooter {...props} />
        </Left>
        <Right>
          <ChatBox {...props} />
          <SendMessageForm setDirectCallMessage={props.setDirectCallMessage} />
        </Right>
      </Wrapper>
    </Container>
  );
};

function mapStoreToProps({ dashboard, call }) {
  return {
    ...call,
    ...dashboard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideCallRejectedDialog: (callRejectedDetails) =>
      dispatch(setCallRejected(callRejectedDetails)),
    setCameraEnabled: (enabled) => dispatch(setLocalCameraEnabled(enabled)),
    setMicrophoneEnabled: (enabled) =>
      dispatch(setLocalMicrophoneEnabled(enabled)),
    setDirectCallMessage: (received, content) =>
      dispatch(setMessage(received, content)),
  };
}

export default connect(mapStoreToProps, mapDispatchToProps)(MeetingView);
