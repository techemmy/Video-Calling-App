/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import user from "../../assets/user-add.png";
import arrowUp from "../../assets/arrowup.png";
import { useState } from "react";
import ActiveParticipant from "../activeParticipant/ActiveParticipant";
import {
  Arrow,
  ArrowD,
  Btn,
  BtnDiv,
  Container,
  Down,
  DownWrapper,
  Up,
  UpWrapper,
  Wrapper,
} from "./chatbox.styles";
import GroupChat from "../Groupchat/GroupChat";
import Messages from "../Messages/Messages";
import ActiveRooms from "../ActiveRooms";

const ChatBox = (props) => {
  const [currentPage, setCurrentPage] = useState("participant");
  const [activeButton, setActiveButton] = useState("participant");
  const [currentDownPage, setCurrentDownPage] = useState("personal");
  const [isUpWrapperExpanded, setIsUpWrapperExpanded] = useState(true);
  const [isDownWrapperExpanded, setIsDownWrapperExpanded] = useState(true);

  const handleUpArrowClick = () => {
    setIsUpWrapperExpanded(!isUpWrapperExpanded);
    setIsDownWrapperExpanded(true);
    // if(isUpWrapperExpanded){
    //   return
    // }
    // setIsDownWrapperExpanded(!isDownWrapperExpanded);
  };

  const handleDownArrowClick = () => {
    setIsUpWrapperExpanded(true);
    setIsDownWrapperExpanded(!isDownWrapperExpanded);
  };

  const handleClick = (page) => {
    setCurrentPage(page);
    setActiveButton(page);
  };

  const handleDownClick = (page) => {
    setCurrentDownPage(page);
    setActiveButton(page);
  };

  return (
    <Container>
      <Wrapper>
        <UpWrapper expanded={isUpWrapperExpanded}>
          <Up>
            <Btn
              type="btn"
              onClick={() => handleClick("participant")}
              className={activeButton === "participant" ? "active" : ""}
            >
              Participants
            </Btn>
            <Btn
              type="btn"
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
              onClick={() => handleClick("rooms")}
              className={activeButton === "rooms" ? "active" : ""}
            >
              Rooms <img src={user} alt="" />
            </Btn>
            <Arrow
              src={arrowUp}
              alt=""
              onClick={handleUpArrowClick}
              expanded={isUpWrapperExpanded}
            />
          </Up>
          {isUpWrapperExpanded && (
            <div>
              {currentPage === "participant" ? (
                <ActiveParticipant
                  expanded={isUpWrapperExpanded && !isDownWrapperExpanded}
                />
              ) : (
                <ActiveRooms
                  {...props}
                  expanded={isUpWrapperExpanded && !isDownWrapperExpanded}
                />
              )}
            </div>
          )}
        </UpWrapper>

        <DownWrapper expanded={isDownWrapperExpanded}>
          <Down>
            <Btn>Chats</Btn>
            <BtnDiv>
              <Btn
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                onClick={() => handleDownClick("personal")}
                className={activeButton === "personal" ? "active" : ""}
              >
                Personal
              </Btn>
              {/*<Btn
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                onClick={() => handleDownClick("group")}
                className={activeButton === "group" ? "active" : ""}
              >
                Group
              </Btn>*/}
            </BtnDiv>

            <ArrowD
              src={arrowUp}
              alt=""
              onClick={handleDownArrowClick}
              expandedD={!isDownWrapperExpanded}
            />
          </Down>
          {isDownWrapperExpanded && (
            <div>
              {currentDownPage === "personal" ? (
                <Messages
                  {...props}
                  expanded={isDownWrapperExpanded && !isUpWrapperExpanded}
                />
              ) : (
                <GroupChat
                  {...props}
                  expanded={isDownWrapperExpanded && !isUpWrapperExpanded}
                />
              )}
            </div>
          )}
        </DownWrapper>
      </Wrapper>
    </Container>
  );
};

export default ChatBox;
