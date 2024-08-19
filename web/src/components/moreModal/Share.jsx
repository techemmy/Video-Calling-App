/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Container, Details, DetailsP, Input, P, Span, Wrapper } from "./share.styles";
import { Close } from "@mui/icons-material";

const Share = ({ setPage }) => {
  const handleCloseModal = () => {
    setPage("");
  };

  return (
    <Container>
      <Wrapper>
        <Details>
          <DetailsP>Share an external video</DetailsP>
          <Close
          onClick={handleCloseModal}
          style={{ cursor: "pointer", fontSize: "35px"}}
        />
        </Details>
        
        <P>External Video URL</P>
        <Input type="text" />
        <Span>
          Note: Shared external videos will not appear in the recording.
          YouTube, Vimeo, Instructure Media, Twitch, Dailymotion and media file
          URLs (e.g. https://example.com/xy.mp4) are supported.
        </Span>
        <Button>Share a new video </Button>
      </Wrapper>
    </Container>
  );
};

export default Share;
