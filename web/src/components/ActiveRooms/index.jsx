/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import p2 from "../../assets/Ellipse 8.png";
import * as webRTCGroupCallHandler from "../../utils/webRTC/webRTCGroupCallHandler";

const Container = styled.div`
  padding: 5px 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: ${({ expanded }) => (expanded ? "460px" : "220px")};

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  scroll-behavior: smooth;

  &:hover {
    scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    border-radius: 53px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #0060ff;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const AllParticipant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.bgNav};
  border-radius: 31.5px;
  padding: 8px 9px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avater = styled.img``;

const Name = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 33px;
  color: ${({ theme }) => theme.soft};
`;

const ActiveRooms = ({ expanded, groupCallRooms }) => {

  const handleListItemPressed = (socketId, roomId, hostName) => {
    webRTCGroupCallHandler.joinGroupCall(socketId, roomId, hostName)
  };

  return (
    <Container>
      <Wrapper expanded={expanded}>
        {
          groupCallRooms.map(room => (
            <AllParticipant key={room.roomId} onClick={() => handleListItemPressed(room.socketId, room.roomId, room.hostName)}>
              <UserInfo>
                <Avater src={p2} alt="" />
                <Name>{room.hostName}</Name>
              </UserInfo>
            </AllParticipant>
          ))
        }
      </Wrapper>
    </Container>
  );
};

export default ActiveRooms;
