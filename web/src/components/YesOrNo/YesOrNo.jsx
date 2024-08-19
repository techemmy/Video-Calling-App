/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import add from "../../assets/add.png";
import on from "../../assets/on.png";
import off from "../../assets/off.png";
import {
  Add,
  Anonymous,
  Btn,
  Button,
  Container,
  Desc,
  Icon,
  Option,
  ResTitle,
  ToggleBtn,
  ToggleImg,
  Options,
} from "./yes.styles";

const YesOrNo = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const handleToggle = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <Container>
      <ResTitle>Responses Choices</ResTitle>
      <Options>
        <Option> A</Option>
        <Option> B</Option>
        <Option> Abstention</Option>
      </Options>

      <Add>
        <Icon src={add} alt="" />
        <Btn>Add items</Btn>
      </Add>
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

export default YesOrNo;
