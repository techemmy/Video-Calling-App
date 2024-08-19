/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Badge,
  HeaderWrapper,
  MobileWrapper,
  Notification,
  SmallWrapper,
  Smalline,
  Smalltext,
  UserDiv,
  UserPart,
} from "./mettingHeader.styles";
import { Message, People } from "@mui/icons-material";
import arrow from "../../assets/mobilearrow.png";
import link from "../../assets/link.png";

const MobileHeader = ({handleMessageModal, openMessage}) => {
  return (
    <MobileWrapper>
      <HeaderWrapper>
        <img src={arrow} alt="icon" />
        <UserDiv>
          <SmallWrapper>
            <img src={link} alt="" />
            <Smalline />
            <Smalltext>cem-jnmt-hsu</Smalltext>
          </SmallWrapper>
          <UserPart>
            <People /> <span>15+</span>
          </UserPart>
          <Notification onClick={handleMessageModal}>
            <Message />
            <Badge>4</Badge>
          </Notification>
        </UserDiv>
      </HeaderWrapper>
      {openMessage && <div style={{background: "red"}}>Chatbox</div>}
    </MobileWrapper>
  );
};

export default MobileHeader;
