/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Close } from "@mui/icons-material";
import {
  Container,
  P,
  Selected,
  Wrapper,
} from "./NotificationMsgDialog.styles";

const NotificationMsgDialog = ({ notificationMsg, setShowNotification }) => {
  return (
    <Container>
      <Wrapper>
        <Selected>
          <P>{notificationMsg}</P>
          <Close
            onClick={() => setShowNotification(false)}
            style={{ cursor: "pointer", fontSize: "40px" }}
          />
        </Selected>
      </Wrapper>
    </Container>
  );
};

export default NotificationMsgDialog;
