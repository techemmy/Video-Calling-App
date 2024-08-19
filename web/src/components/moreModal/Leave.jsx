/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import {
  BtnWrapper,
  Button,
  Container,
  P,
  Span,
  Wrapper,
} from "./leave.styles";

const Leave = ({ setPage }) => {
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
        <P>Leave RCCG MARCH 2023 SPECIAL THANKSGIVING SERVICE</P>
        <Span>
          This action will remove you from the meeting. Are you sure you want to
          leave this meeting?
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

export default Leave;
