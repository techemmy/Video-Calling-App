/* eslint-disable react/prop-types */
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import cam from "../../assets/cam.png";
import {
  Action,
  Container,
  Details,
  HeadingTitle,
  Headings,
  Img,
  ParticipantImg,
  Span,
  Time,
  Wrapper,
} from "./meetingHeader.styles";
import { useEffect, useState } from "react";
import { callStates } from "../../store/actions/callActions";
import { Tooltip } from "@mui/material";
import React from "react";

const MeetingHeader = ({
  setDarkMode,
  darkMode,
  username,
  callState,
  groupCallActive,
  callerUsername,
  groupCallHostname,
  groupCallMembers,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const MAX_GROUP_MEMBERS_TO_SHOW = 2;
  groupCallMembers = groupCallMembers.filter(
    (member) => member.username !== username,
  );

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 30000);

    return () => {
      setCurrentDate(null);
    };
  }, []);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container>
      <Wrapper>
        <Details>
          <Img src={cam} alt="" />
          <Headings>
            <HeadingTitle>
              {callState === callStates.CALL_AVAILABLE
                ? "Call someone"
                : callState === callStates.CALL_IN_PROGRESS && groupCallActive
                  ? `Room Host: ${groupCallHostname}`
                  : `Call with ${callerUsername}`}
            </HeadingTitle>
            <Time>{`${currentDate?.toDateString()} | ${currentDate?.getHours()}:${currentDate?.getMinutes()}`}</Time>
          </Headings>
        </Details>
        <Action>
          {groupCallActive && (
            <ParticipantImg>
              {groupCallMembers
                .slice(0, MAX_GROUP_MEMBERS_TO_SHOW)
                .map((member, memberIdx) => {
                  const position = 90 - memberIdx * 33;
                  if (
                    memberIdx + 1 === MAX_GROUP_MEMBERS_TO_SHOW &&
                    groupCallMembers.length > MAX_GROUP_MEMBERS_TO_SHOW
                  ) {
                    return (
                      <React.Fragment key={member.username}>
                        <Tooltip title={member.username}>
                          <Span style={{ right: position }}>
                            {member.username[0].toUpperCase()}
                          </Span>
                        </Tooltip>
                        <Tooltip>
                          <Span style={{ right: position - 33 }}>
                            +{groupCallMembers.length - 1}
                          </Span>
                        </Tooltip>
                      </React.Fragment>
                    );
                  }
                  return (
                    <Tooltip key={member.username} title={member.username}>
                      <Span style={{ right: position }}>
                        {member.username[0].toUpperCase()}
                      </Span>
                    </Tooltip>
                  );
                })}
            </ParticipantImg>
          )}

          {darkMode ? (
            <DarkModeOutlined
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <LightModeOutlined
              onClick={handleClick}
              style={{ cursor: "pointer", color: "white" }}
            />
          )}
        </Action>
      </Wrapper>
    </Container>
  );
};

export default MeetingHeader;
