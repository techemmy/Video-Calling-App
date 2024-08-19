/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Action,
  ActionWrapper,
  Btn,
  Btns,
  Container,
  Desc,
  Hr,
  Icon,
  IconsWrapper,
  Lang,
  Span,
  StyledSelect,
  Title,
} from "./application.styles";
import on from "../../assets/on.png";
import off from "../../assets/off.png";
import add from "../../assets/plus.png";
import minus from "../../assets/minus.png";

const Application = () => {
  const [toggleBtn, setToggleBtn] = useState([{ On: false }, { On: false }]);
  const [btnInc, setBtnInc] = useState(10);

  const toggle = (index) => {
    setToggleBtn((prevBtn) => {
      const updatedBtn = [...prevBtn];
      updatedBtn[index] = {
        ...updatedBtn[index],
        On: !updatedBtn[index].On,
      };
      return updatedBtn;
    });
  };

  const increment = () => {
    setBtnInc((prevInc) => prevInc + 10);
  };

  const decrement = () => {
    setBtnInc((prevInc) => prevInc - 10);
  };

  return (
    <Container>
      <Title>Application</Title>
      <ActionWrapper>
        <Action>Animations</Action>
        <Btn>
          {toggleBtn[0].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
          <Icon
            onClick={() => toggle(0)} // Pass the index to toggle function
            src={toggleBtn[0].On ? on : off}
            alt="on"
          />
        </Btn>
      </ActionWrapper>
      <ActionWrapper>
        <Action>Audio Filters for Microphone</Action>
        <Btn>
          {toggleBtn[1].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
          <Icon
            onClick={() => toggle(1)} // Pass the index to toggle function
            src={toggleBtn[1].On ? on : off}
            alt="on"
          />
        </Btn>
      </ActionWrapper>
      <ActionWrapper>
        <Action>Application Language</Action>
        <Lang>
          <StyledSelect name="" id="">
            <option value="">English</option>
            <option value="">Chinese</option>
          </StyledSelect>
        </Lang>
      </ActionWrapper>
      <Hr />
      <ActionWrapper>
        <Action>Font size</Action>
        <Span>{btnInc}%</Span>
        <IconsWrapper>
          <Btns onClick={decrement} src={minus} alt="" />
          <Btns onClick={increment} src={add} alt="" />
        </IconsWrapper>
      </ActionWrapper>
      <ActionWrapper>
        <Action>Layout type</Action>
        <Lang>
          <StyledSelect name="" id="">
            <option value="">Smart layout</option>
            <option value="">Smartest layout</option>
          </StyledSelect>
        </Lang>
      </ActionWrapper>
    </Container>
  );
};

export default Application;
