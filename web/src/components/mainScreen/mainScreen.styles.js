import { styled } from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  /* height: ${({ fullScreen }) => (fullScreen ? "100%" : "")}; */
  background-color: ${({ theme }) => theme.bgMain};
  padding: 0 20px;
  transition: 0.5s ease-in-out;
`;

export const VideoBx = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HostVideo = styled.div`
  margin: 10px 0;
  width: 100%;
  height: ${({ fullScreen }) => (fullScreen ? "558px" : "420px")};
  position: relative;
  ${tablet({ height: "410px" })};
`;

export const HostVideoStream = styled.video`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 15px;
  /* ${tablet({ height: "346px", width: "auto" })}; */
`;

export const HostVideoPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ fullScreen }) => (fullScreen ? "558px" : "90%")};
  border-radius: 15px;
`;
export const PlaceHolderTextContainer = styled.div`
  padding: 5rem;
  background-color: #0060ff;
  border-radius: 100%;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ chatBox }) => (chatBox ? "90%" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  ${tablet({ flexDirection: "column" })};
  position: relative;
`;
export const ImgContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: -40px;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  scroll-behavior: smooth;
  align-items: center;

  &:hover {
    scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 53px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #0060ff;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const JoinedUserVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: 0.5s ease-in-out;
  /* margin: 10px;
  ${tablet({ height: "20%", width: "20%" })}; */
`;

export const PWrapper = styled.div`
  height: 25%;
  width: 25%;
  object-fit: cover;
  flex-shrink: 0;
  /* margin: 10px; */
  ${tablet({ height: "20%", width: "20%" })};
  position: relative;
`;

export const Record = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 14, 14, 0.3);
  backdrop-filter: blur(7.5px);
  border-radius: 76px;
  padding: 5px 15px;
`;
export const Icon = styled.img``;
export const Span = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 33px;
  color: #ffffff;
`;
export const AvarterName = styled.div`
  position: absolute;
  bottom: ${({ fullScreen }) => (fullScreen ? "-25%" : "60px")};
  left: 10px;
`;
export const Name = styled.span`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4.08333px);
  border-radius: 89.8333px;
  padding: 8.16667px 29.4px;
  font-weight: 500;
  font-size: 20px;
  line-height: 33px;
  color: #ffffff;
`;
export const IconZoom = styled.img`
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
`;
export const IconAdd = styled.img`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4.08333px);
  border-radius: 89.8333px;
  padding: 1rem;
  position: absolute;
  bottom: ${({ fullScreen }) => (fullScreen ? "-25%" : "60px")};
  right: 10px;
  cursor: pointer;
`;

export const Pspan = styled.span`
  position: absolute;
  bottom: 20px;
  left: 10px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2.76881px);
  border-radius: 60.9138px;
  padding: 5px 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
`;
export const Picon = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
`;

// Mobile main screen

export const MobileContainer = styled.div``;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileHostVideo = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 0.44869rem;
  object-fit: cover;
  position: relative;
`;
export const Host = styled.img`
  width: 100%;
  height: 100%;
`;

export const Transcript = styled.div`
  position: absolute;
  bottom: 15px;
  left: 10px;
  border-radius: 0.56088rem;
  background-color: #624624;
  backdrop-filter: blur(28.71706199645996px);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  flex-shrink: 0;
  justify-content: center;
`;

export const TransDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Time = styled.span`
  color: #bfbfbf;
  font-size: 0.44869rem;
  font-weight: 400;
  line-height: normal;
`;

export const P = styled.span`
  width: 15.87294rem;
  color: #fff;
  font-family: Futura Md BT;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Joined = styled.div`
  display: flex;
  gap: 16px;
  margin: 0.7rem 0;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  scroll-behavior: smooth;
  align-items: center;

  &:hover {
    scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 53px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #0060ff;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const JoinedWrapper = styled.div`
  position: relative;
`;

export const JoinedUserImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
`;

export const JoinedIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 10px;
  right: 5px;
`;
