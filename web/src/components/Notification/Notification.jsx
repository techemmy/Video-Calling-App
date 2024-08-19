/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Action,
  ActionWrapper,
  AlertDesc,
  AlertWrapper,
  Btn,
  Container,
  Desc,
  Icon,
  P,
  Title,
} from "./notification.styles";
import on from "../../assets/on.png";
import off from "../../assets/off.png";

const Notification = () => {
  const [toggleBtn, setToggleBtn] = useState([
    { On: true }, // Index 0
    { On: false }, // Index 1
    { On: false }, // Index 2
    { On: false }, // Index 3
    { On: false }, // Index 4
    { On: false }, // Index 5
    { On: true }, // Index 6
    { On: true }, // Index 7
  ]);

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
      <Title>Notifications</Title>
      <P>Define how and what you will be notified</P>
      <ActionWrapper>
        <Action>Chat Message</Action>
        <AlertWrapper>
          <AlertDesc>Audio Alerts</AlertDesc>
          <Btn>
            {toggleBtn[0].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
            <Icon
              onClick={() => toggle(0)} // Pass the index to toggle function
              src={toggleBtn[0].On ? on : off}
              alt="on"
            />
          </Btn>
        </AlertWrapper>
        <AlertWrapper>
          <AlertDesc>Popup Alerts</AlertDesc>
          <Btn>
            {toggleBtn[1].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
            <Icon
              onClick={() => toggle(1)} // Pass the index to toggle function
              src={toggleBtn[1].On ? on : off}
              alt="on"
            />
          </Btn>
        </AlertWrapper>
      </ActionWrapper>
      <ActionWrapper>
        <Action>User Join</Action>
        <AlertWrapper>
          <AlertDesc>Audio Alerts</AlertDesc>
          <Btn>
            {toggleBtn[2].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
            <Icon
              onClick={() => toggle(2)} // Pass the index to toggle function
              src={toggleBtn[2].On ? on : off}
              alt="on"
            />
          </Btn>
        </AlertWrapper>
        <AlertWrapper>
          <AlertDesc>Popup Alerts</AlertDesc>
          <Btn>
            {toggleBtn[3].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
            <Icon
              onClick={() => toggle(3)} // Pass the index to toggle function
              src={toggleBtn[3].On ? on : off}
              alt="on"
            />
          </Btn>
        </AlertWrapper>
      </ActionWrapper>
      <ActionWrapper>
        <Action>User Leave</Action>
        <AlertWrapper>
          <AlertDesc>Audio Alerts</AlertDesc>
          <Btn>
            {toggleBtn[4].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
            <Icon
              onClick={() => toggle(4)} // Pass the index to toggle function
              src={toggleBtn[4].On ? on : off}
              alt="on"
            />
          </Btn>
        </AlertWrapper>
        <AlertWrapper>
          <AlertDesc>Popup Alerts</AlertDesc>
          <Btn>
            {toggleBtn[5].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
            <Icon
              onClick={() => toggle(5)} // Pass the index to toggle function
              src={toggleBtn[5].On ? on : off}
              alt="on"
            />
          </Btn>
        </AlertWrapper>
      </ActionWrapper>
      <ActionWrapper>
        <Action>Raise hand</Action>
        <AlertWrapper>
          <AlertDesc>Audio Alerts</AlertDesc>
          <Btn>
            {toggleBtn[6].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
            <Icon
              onClick={() => toggle(6)} // Pass the index to toggle function
              src={toggleBtn[6].On ? on : off}
              alt="on"
            />
          </Btn>
        </AlertWrapper>
        <AlertWrapper>
          <AlertDesc>Popup Alerts</AlertDesc>
          <Btn>
            {toggleBtn[7].On ? <Desc>ON</Desc> : <Desc>OFF</Desc>}
            <Icon
              onClick={() => toggle(7)} // Pass the index to toggle function
              src={toggleBtn[7].On ? on : off}
              alt="on"
            />
          </Btn>
        </AlertWrapper>
      </ActionWrapper>
    </Container>
  );
};

export default Notification;
