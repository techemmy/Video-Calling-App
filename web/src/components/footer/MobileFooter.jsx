/* eslint-disable no-unused-vars */
import {
  CallEnd,
  IosShare,
  Message,
  Mic,
  MicOff,
  MoreHoriz,
  RadioButtonChecked,
  Videocam,
  VideocamOff,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import {
  Btn,
  BtnAct,
  FooterContainer,
  FooterWrapper,
  Icons,
  MoreIcon,
} from "./meetingFooter.styles";
import { useState } from "react";
import More from "../moreModal/More";

const MobileFooter = () => {
  const [mic, setMic] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  const [cam, setCam] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  return (
    <FooterWrapper>
      <FooterContainer>
        <Tooltip title={speaker ? "Mute" : "UnMute"} placement="top">
          <Icons onClick={() => setSpeaker(!speaker)} index={0}>
            {speaker ? (
              <VolumeUp style={{ color: "white" }} />
            ) : (
              <VolumeOff style={{ color: "white" }} />
            )}
          </Icons>
        </Tooltip>
        <Tooltip
          title={cam ? "Turn Off Video" : "Turn On Video"}
          placement="top"
        >
          <Icons onClick={() => setCam(!cam)} index={1}>
            {cam ? (
              <Videocam style={{ color: "white" }} />
            ) : (
              <VideocamOff style={{ color: "white" }} />
            )}
          </Icons>
        </Tooltip>
        <BtnAct onClick={() => setShowEndModal(!showEndModal)}>
          <CallEnd style={{ color: "#fff" }} />
          {/* {showEndModal && <EndCall setShowEndModal={setShowEndModal} />} */}
        </BtnAct>

        <Tooltip title={mic ? "Mute" : "UnMute"} placement="top">
          <Icons onClick={() => setMic(!mic)} index={0}>
            {mic ? (
              <Mic style={{ color: "white" }} />
            ) : (
              <MicOff style={{ color: "white" }} />
            )}
          </Icons>
        </Tooltip>
        <MoreIcon>
          <MoreIcon>
            <Tooltip title="More" placement="top">
              <Icons index={5} onClick={() => setShowMore(!showMore)}>
                <MoreHoriz style={{ color: "#fff" }} />
              </Icons>
            </Tooltip>
          </MoreIcon>
          {showMore && <More setShowMore={setShowMore} showMore={showMore} />}
        </MoreIcon>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default MobileFooter;
