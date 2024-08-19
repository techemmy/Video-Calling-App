import { useEffect, useRef } from "react";
import { JoinedUserVideo } from "../mainScreen/mainScreen.styles";

const JoinedUser = ({ stream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const remoteGroupCallVideo = videoRef.current;
    remoteGroupCallVideo.srcObject = stream;
    remoteGroupCallVideo.onloadedmetadata = () => {
      remoteGroupCallVideo.play();
    };
  }, [stream]);

  return <JoinedUserVideo ref={videoRef} playsInline webkitPlaysInline />;
};

export default JoinedUser;
