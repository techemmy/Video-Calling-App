/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import p1 from "../../assets/Ellipse 7.png";
import p2 from "../../assets/Ellipse 8.png";
import p3 from "../../assets/Ellipse 9.png";
import p4 from "../../assets/Ellipse 10.png";
import microphone from "../../assets/microphone.png";
import microphoneOff from "../../assets/microphone-slash.png";
import video from "../../assets/video.png";
import videoOff from "../../assets/video-slash.png";
import { useState } from "react";
import {
  AllParticipant,
  Avater,
  Container,
  Icon,
  IconWrapper,
  Name,
  UserInfo,
  Wrapper,
} from "./activeParticipant.styles";
import { connect } from "react-redux";
import { callToOtherUser } from "../../utils/webRTC/webRTCHandler";
import { callStates } from "../../store/actions/callActions";

const ActiveParticipant = ({ expanded, activeUsers, callState }) => {
  const [participants, setParticipants] = useState([
    { micOn: false, camOn: false },
    { micOn: false, camOn: false },
    { micOn: false, camOn: false },
    { micOn: false, camOn: false },
  ]);

  const toggleMic = (index) => {
    setParticipants((prevParticipants) => {
      const updatedParticipants = [...prevParticipants];
      updatedParticipants[index] = {
        ...updatedParticipants[index],
        micOn: !updatedParticipants[index].micOn,
      };
      return updatedParticipants;
    });
  };

  const toggleCam = (index) => {
    setParticipants((prevParticipants) => {
      const updatedParticipants = [...prevParticipants];
      updatedParticipants[index] = {
        ...updatedParticipants[index],
        camOn: !updatedParticipants[index].camOn,
      };
      return updatedParticipants;
    });
  };

  const handleListItemPressed = (activeUser) => {
    if (callState === callStates.CALL_AVAILABLE) {
      callToOtherUser(activeUser);
    }
  };

  return (
    <Container>
      <Wrapper expanded={expanded}>
        {activeUsers.map(user => {
          return (
            <AllParticipant onClick={() => handleListItemPressed(user)} key={user.socketId}>
              <UserInfo>
                <Avater src={p2} alt="" />
                <Name>{user.username}</Name>
              </UserInfo>
              <IconWrapper>
                <Icon
                  onClick={() => toggleMic(0)}
                  src={participants[0].micOn ? microphone : microphoneOff}
                  alt=""
                />
                <Icon
                  onClick={() => toggleCam(0)}
                  src={participants[0].camOn ? video : videoOff}
                  alt=""
                />
              </IconWrapper>
            </AllParticipant>
          )
        })}
      </Wrapper>
    </Container>
  );
};


const mapStateToProps = ({ dashboard, call }) => ({
  ...dashboard,
  ...call
})

export default connect(mapStateToProps)(ActiveParticipant);
