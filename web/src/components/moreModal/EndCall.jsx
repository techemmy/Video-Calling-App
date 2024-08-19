/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import {
  BtnWrapper,
  Button,
  Container,
  P,
  Span,
  Wrapper,
} from "./endCall.styles";

const EndCall = ({ setPage }) => {
  const handleCloseModal = () => {
    setPage("");
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
        <P>End RCCG MARCH 2023 SPECIAL THANKSGIVING SERVICE</P>
        <Span>
          This action will end the session for 2 active user(s). Are you sure
          you want to end this session?
        </Span>
        <BtnWrapper>
          <Button type="yes" onClick={handleCloseModal}>
            Yes{" "}
          </Button>
          <Button onClick={handleCloseModal}>No </Button>
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default EndCall;
