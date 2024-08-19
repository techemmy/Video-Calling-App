import {
  Host,
  MobileContainer,
  MobileHostVideo,
  P,
  Time,
  TransDesc,
  Transcript,
  VideoWrapper,
} from "./mainScreen.styles";
import img1 from "../../assets/mobilehost.png";
import voice from "../../assets/voice.png";
import MobileJoinedUser from "../joinedUsers/MobileJoinedUser";

const MobileMainscreen = () => {
  return (
    <MobileContainer>
      <VideoWrapper>
        <MobileHostVideo>
          <Host src={img1} alt="" />
          <Transcript>
            <img src={voice} alt="" />
            <TransDesc>
              <Time>Now</Time>
              <P>
                Thank you everyone for joining the design critique meeting. I
                want everyone’s opinion so please start !
              </P>
            </TransDesc>
          </Transcript>
        </MobileHostVideo>
        <MobileJoinedUser />
      </VideoWrapper>
    </MobileContainer>
  );
};

export default MobileMainscreen;
