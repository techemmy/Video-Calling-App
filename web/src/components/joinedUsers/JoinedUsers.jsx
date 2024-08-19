/* eslint-disable no-unused-vars */
import { ImgContainer, PWrapper, Pspan } from "../mainScreen/mainScreen.styles";
import JoinedUser from "./JoinedUser";

const JoinedUsers = ({ groupCallStreams }) => {
  return (
    <>
      <ImgContainer>
        {groupCallStreams?.map((stream) => {
          return (
            <PWrapper key={stream.id}>
              <JoinedUser stream={stream} />
              <Pspan>Joined</Pspan>
            </PWrapper>
          );
        })}
      </ImgContainer>
    </>
  );
};

export default JoinedUsers;
