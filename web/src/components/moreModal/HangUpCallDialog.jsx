/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import {
  BtnWrapper,
  Button,
  Container,
  P,
  Wrapper,
} from "./HangUpCallDialog.styles";
import { hangUp } from "../../utils/webRTC/webRTCHandler";

const HangUpCallDialog = () => {
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
        <P>Calling...</P>
        <BtnWrapper>
          <Button onClick={hangUp}>Hang up</Button>
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default HangUpCallDialog;
