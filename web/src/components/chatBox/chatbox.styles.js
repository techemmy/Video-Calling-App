import { styled } from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 170px);
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

export const UpWrapper = styled.div`
  flex: 1;
  width: 100%;
  transition: height 0.3s ease-in-out;
  overflow: hidden;
`;

export const Up = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.bottomLine};
  background-color: ${({ theme }) => theme.bgNav};
  padding: 10px 15px;
  column-gap: 5px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.btnBg};
  border-radius: 50px;
  padding: 5px 10px;
`;

export const Btn = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 33px;
  color: ${({ theme }) => theme.btnText};
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 1px 20px;
  border-radius: 50px;

  &.active {
    background: ${({ type }) => (type === "btn" ? "#DFEBFF" : "#0060FF")};
    color: ${({ type }) => (type === "btn" ? "#0060FF" : "#fff")};
  }
`;

export const Arrow = styled.img`
  transition: transform 0.3s ease-in-out;
  ${({ expanded }) => (expanded ? "transform: rotate(180deg);" : "")};
  cursor: pointer;
`;

export const ArrowD = styled.img`
  transition: transform 0.3s ease-in-out;
  ${({ expandedD }) => (expandedD ? "transform: rotate(180deg);" : "")};
  cursor: pointer;
`;

export const DownWrapper = styled.div`
  flex: 1;
  width: 100%;
  transition: height 0.3s ease-in-out;
  overflow: hidden;
`;

export const Down = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.bottomLine};
  background-color: ${({ theme }) => theme.bgNav};
  padding: 5px 15px;
`;
