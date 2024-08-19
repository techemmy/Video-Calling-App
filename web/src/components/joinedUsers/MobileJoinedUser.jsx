/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Joined,
  JoinedIcon,
  JoinedUserImg,
  JoinedWrapper,
} from "../mainScreen/mainScreen.styles";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import micOff from "../../assets/Mic.png";
import micOn from "../../assets/signal.png";

const MobileJoinedUser = () => {
  const [mic, setMic] = useState(true);

  const handleMic = () => {
    setMic(!mic);
  };
  return (
    <Joined>
      <JoinedWrapper>
        <JoinedUserImg src={img2} alt="" />
        <JoinedIcon onClick={handleMic} src={mic ? micOff : micOn} alt="" />
      </JoinedWrapper>
      <JoinedWrapper>
        <JoinedUserImg src={img3} alt="" />
        <JoinedIcon onClick={handleMic} src={mic ? micOff : micOn} alt="" />
      </JoinedWrapper>
      <JoinedWrapper>
        <JoinedUserImg src={img4} alt="" />
        <JoinedIcon onClick={handleMic} src={mic ? micOff : micOn} alt="" />
      </JoinedWrapper>
      
      <JoinedWrapper>
        <JoinedUserImg src={img2} alt="" />
        <JoinedIcon onClick={handleMic} src={mic ? micOff : micOn} alt="" />
      </JoinedWrapper>
      <JoinedWrapper>
        <JoinedUserImg src={img2} alt="" />
        <JoinedIcon onClick={handleMic} src={mic ? micOff : micOn} alt="" />
      </JoinedWrapper>
    </Joined>
  );
};

export default MobileJoinedUser;
