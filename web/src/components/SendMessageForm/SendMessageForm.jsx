/* eslint-disable no-unused-vars */
import { AttachFile } from "@mui/icons-material";
import { styled } from "styled-components";
import sent from "../../assets/sent.png";
import { sendMessageUsingDataChannel } from "../../utils/webRTC/webRTCHandler";
import { useState } from "react";

const Container = styled.div`
  padding: 0 24px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgMain};
  padding: 5px 24px;
  border-radius: 88px;
  cursor: pointer;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background: transparent;
  color: #8d8f98;
  padding: 5px 10px;
`;
const Icon = styled.img`
  width: 15%;
  height: 15%;
`;

const SendMessageForm = ({ setDirectCallMessage }) => {
  const [messageInput, setMessageInput] = useState('');

  const handleOnKeyDownEvent = (e) => {
    if (e.keyCode === 13 && messageInput.trim().length > 0) {
      sendMessageUsingDataChannel(messageInput);
      setDirectCallMessage(true, messageInput)
      setMessageInput('');
    }
  };

  function handleMessageSent(event) {
    event.preventDefault()
    if (messageInput.trim()) {
      sendMessageUsingDataChannel(messageInput);
      setDirectCallMessage(true, messageInput)
      setMessageInput('');
    }
  }

  return (
    <Container>
      <InputWrapper>
        <AttachFile style={{ color: "#8D8F98" }} />
        <Input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          type="text" placeholder="Write your message"
          onKeyDown={handleOnKeyDownEvent}
        />
        <Icon onClick={handleMessageSent} src={sent} alt="" />
      </InputWrapper>
    </Container>
  );
};

export default SendMessageForm;
