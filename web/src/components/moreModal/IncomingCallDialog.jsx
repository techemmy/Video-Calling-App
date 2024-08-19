/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import {
  BtnWrapper,
  Button,
  Container,
  P,
  Wrapper,
} from "./IncomingCallDialog.styles";
import {
  acceptIncomingCallRequest,
  hangUp,
  rejectIncomingCallRequest,
} from "../../utils/webRTC/webRTCHandler";

const IncomingCallDialog = ({ title }) => {
  const handleCloseModal = () => {
    hangUp();
  };

  return (
    <Container>
      <Wrapper>
        <Close
          onClick={handleCloseModal}
          style={{
            display: "flex",
            alignSelf: "end",
            cursor: "pointer",
            fontSize: "40px",
          }}
        />
        <P>{title}</P>
        <BtnWrapper>
          <Button type="yes" onClick={acceptIncomingCallRequest}>
            Accept
          </Button>
          <Button onClick={rejectIncomingCallRequest}>Decline</Button>
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default IncomingCallDialog;
