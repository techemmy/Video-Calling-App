/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Container,
  List,
  ListWrapper,
  ShareWrapper,
  Span,
  Wrapper,
} from "./more.styles";
import {
  Close,
  ExitToApp,
  PersonOutline,
  RemoveFromQueue,
  Settings,
  SignalCellularAlt2Bar,
  Theaters,
  Tv,
} from "@mui/icons-material";
import Share from "./Share";
import RandomUser from "./RandomUser";
import Poll from "../../pages/Poll/Poll";
import Leave from "./Leave";
import EndCall from "./EndCall";

const More = ({ setShowMore }) => {
  const [currentPage, setCurrentPage] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (page) => {
    setCurrentPage(page);
    setActiveButton(page);
  };

  const handleCloseModal = () => {
    setShowMore(false);
  };

  return (
    <Container>
      <Wrapper>
        <Close
          onClick={handleCloseModal}
          style={{
            width: "30px",
            height: "30px",
            cursor: "pointer",
            marginLeft: "250px",
          }}
        />
        <ListWrapper>
          <List to="/manage-presentation">
            <Tv style={{ color: "#95a5af" }} />
            <Span>Manage presentations</Span>
          </List>
          <ShareWrapper>
            <List
              onClick={() => handleClick("poll")}
              className={activeButton === "poll" ? "active" : ""}
            >
              <SignalCellularAlt2Bar style={{ color: "#95a5af" }} />
              <Span>Start a poll</Span>
            </List>
          </ShareWrapper>

          <ShareWrapper>
            <List
              to="#"
              onClick={() => handleClick("video")}
              className={activeButton === "video" ? "active" : ""}
            >
              <Theaters style={{ color: "#95a5af" }} />
              <Span>Share an external Video</Span>
            </List>
          </ShareWrapper>

          <ShareWrapper>
            <List
              onClick={() => handleClick("random")}
              className={activeButton === "random" ? "active" : ""}
            >
              <PersonOutline style={{ color: "#95a5af" }} />
              <Span>Select Random Participant</Span>
            </List>
          </ShareWrapper>

          <List
            onClick={() => handleClick("leave")}
            className={activeButton === "leave" ? "active" : ""}
          >
            <ExitToApp style={{ color: "#95a5af" }} />
            <Span>Leave</Span>
          </List>
          <List
            onClick={() => handleClick("end")}
            className={activeButton === "end" ? "active" : ""}
          >
            <RemoveFromQueue style={{ color: "#95a5af" }} />
            <Span>End meeting</Span>
          </List>
          <List to="/settings">
            <Settings style={{ color: "#95a5af" }} />
            <Span>Settings</Span>
          </List>
        </ListWrapper>
        <div>
          {currentPage === "poll" ? (
            <Poll setPage={setCurrentPage} />
          ) : currentPage === "video" ? (
            <Share setPage={setCurrentPage} />
          ) : currentPage === "random" ? (
            <RandomUser setPage={setCurrentPage} />
          ) : currentPage === "leave" ? (
            <Leave setPage={setCurrentPage} />
          ) : currentPage === "end" ? (
            <EndCall setPage={setCurrentPage} />
          ) : null}
        </div>
      </Wrapper>
    </Container>
  );
};

export default More;
