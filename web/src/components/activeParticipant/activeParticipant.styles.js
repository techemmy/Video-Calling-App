import { styled } from "styled-components";

export const Container = styled.div`
  padding: 5px 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: ${({expanded}) => expanded ? "420px" : "220px"};

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

export const AllParticipant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.bgNav};
  border-radius: 31.5px;
  padding: 8px 9px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avater = styled.img``;

export const Name = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 33px;
  color: ${({ theme }) => theme.soft};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
