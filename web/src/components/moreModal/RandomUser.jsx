/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Close } from "@mui/icons-material";
import {
  Button,
  Container,
  P,
  Selected,
  Span,
  User,
  Username,
  Wrapper,
} from "./randomUser.styles";

const RandomUser = ({ setPage }) => {
  const handleCloseModal = () => {
    setPage("");
  };

  return (
    <Container>
      <Wrapper>
        <Selected>
          <P>Randomly selected participant</P>
          <Close
            onClick={handleCloseModal}
            style={{ cursor: "pointer", fontSize: "40px" }}
          />
        </Selected>

        <User>
          <Username>Od</Username>
        </User>
        <Span>Odejinmi emmy</Span>
        <Button>Select again</Button>
      </Wrapper>
    </Container>
  );
};

export default RandomUser;
