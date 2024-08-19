/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import p1 from "../../assets/Ellipse 7.png";
import p2 from "../../assets/Ellipse 8.png";
import p3 from "../../assets/Ellipse 9.png";
import p4 from "../../assets/Ellipse 10.png";

const Chatting = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px 2rem;
  height: ${({ expanded }) => (expanded ? "460px" : "250px")};
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  scroll-behavior: smooth;

  &:hover {
    scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    border-radius: 53px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #0060ff;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const UserMsg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  gap: 20px;
`;

const UserDesc = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg};
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  color: ${({ theme }) => theme.soft};
`;

const Message = styled.p`
  width: 206px;
  font-weight: 500;
  font-size: 15.3006px;
  line-height: 150%;
  color: ${({ theme }) => theme.soft};
`;

const Span = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 22px;
  color: #a8a8a8;
`;

const Messages = ({ expanded, message, setDirectCallMessage, callerUsername }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (message.content !== '') {
      setMessages([...messages, message])
      setDirectCallMessage(false, '')
    }
  }, [message.received])

  return (
    <Chatting expanded={expanded}>
      {messages.map(message => {
        return (
          <UserMsg key={message.content}>
            <img src={p1} alt="" />
            <UserDesc>
              {/*<Name>{callerUsername}</Name>*/}
              <Message>{message.content}</Message>
            </UserDesc>
            <Span>11:01 AM</Span>
          </UserMsg>
        )
      })}
    </Chatting>
  );
};

export default Messages;
