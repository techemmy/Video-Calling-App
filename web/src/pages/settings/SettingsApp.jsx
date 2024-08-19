/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Btn,
  BtnWrapper,
  CTA,
  Container,
  Headings,
  Hr,
  Left,
  List,
  Right,
  Span,
  Title,
  Wrapper,
} from "./settings.styles";
import { useNavigate } from "react-router-dom";
import { CalendarToday, NotificationsNone, Wifi } from "@mui/icons-material";
import Application from "../../components/Application/Application";
import Notification from "../../components/Notification/Notification";
import DataSavings from "../../components/DataSavings/DataSavings";

const SettingsApp = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("application");
  const [activeButton, setActiveButton] = useState("application");

  const handleClick = (page) => {
    setCurrentPage(page);
    setActiveButton(page);
  };

  const BackHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Headings>
          <Title>Settings</Title>
          <BtnWrapper>
            <Btn onClick={BackHome}>Close</Btn>
            <Btn>Save</Btn>
          </BtnWrapper>
        </Headings>
        <Hr />
        <CTA>
          <Left>
            <List
              onClick={() => handleClick("application")}
              className={activeButton === "application" ? "active" : ""}
            >
              <CalendarToday />
              <Span>Application </Span>
            </List>
            <List
              onClick={() => handleClick("notification")}
              className={activeButton === "notification" ? "active" : ""}
            >
              <NotificationsNone />
              <Span>Notifications</Span>
            </List>
            <List
              onClick={() => handleClick("data")}
              className={activeButton === "data" ? "active" : ""}
            >
              <Wifi />
              <Span>Data savings </Span>
            </List>
          </Left>
          <Right>
            {currentPage === "application" ? (
              <Application />
            ) : currentPage === "notification" ? (
              <Notification />
            ) : (
              <DataSavings />
            )}
          </Right>
        </CTA>
      </Wrapper>
    </Container>
  );
};

export default SettingsApp;
