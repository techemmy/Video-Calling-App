/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Anonymous,
  Button,
  Container,
  Desc,
  Option,
  ResTitle,
  Span,
  ToggleBtn,
  ToggleImg,
} from "./userResponse.styles";
import on from "../../assets/on.png";
import off from "../../assets/off.png";

const UserResponse = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const handleToggle = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <Container>
      <ResTitle>Responses Choices</ResTitle>
      <Span>
        Users will be presented with a text box to fill in their response.
      </Span>
      <Anonymous>
        <Desc>Anonymous Poll</Desc>
        <ToggleBtn>
          {toggleBtn ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
          <ToggleImg onClick={handleToggle} src={toggleBtn ? on : off} alt="" />
        </ToggleBtn>
      </Anonymous>
      <Button>Start Poll</Button>
    </Container>
  );
};

export default UserResponse;
