/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import on from "../../assets/on.png";
import off from "../../assets/off.png";
import {
  Action,
  ActionWrapper,
  Btn,
  Container,
  Desc,
  Icon,
  P,
  Title,
} from "./savings.styles";

const DataSavings = () => {
  const [toggleBtn, setToggleBtn] = useState([{ On: true }, { On: true }]);

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
  return (
    <Container>
      <Title>Data savings</Title>
      <P>To save bandwidth adjust what’s currently being displayed.</P>
      <ActionWrapper>
        <Action>Enable other participant webcams</Action>
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
        <Action>Enable desktop sharing</Action>
        <Btn>
          {toggleBtn[1].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
          <Icon
            onClick={() => toggle(1)} // Pass the index to toggle function
            src={toggleBtn[1].On ? on : off}
            alt="on"
          />
        </Btn>
      </ActionWrapper>
    </Container>
  );
};

export default DataSavings;
