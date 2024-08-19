import { styled } from "styled-components";
import { mobile, tablet } from "../../responsive";

const iconColors = [
  "#0060FF",
  "#0060FF",
  "#DFEBFF",
  "#EB5757",
  "#DFEBFF",
  "#DFEBFF",
];

export const Container = styled.div`
  display: relative;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  ${mobile({ display: "block" })};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 40px 0;

  ${tablet({ padding: "30px " })};
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;
  gap: 0.5rem;
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Icons = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => iconColors[props.index]};
  font-size: 1.3rem;
  color: #333;
  box-shadow: 0.2rem 0.2rem 1rem rgba(51, 51, 51, 0.2);
`;

export const BtnAct = styled.div`
  display: flex;

  ${mobile({
    background: "#f8000f",
    borderRadius: "0.643rem",
    padding: "10px",
  })};
`;
export const Btn = styled.div`
  background: #eb5757;
  border-radius: 73px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  color: white;

  ${tablet({ borderRadius: "50px" })};
`;

export const MoreIcon = styled.div`
  position: relative;
`;

// Mobile Footer

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 2rem;
  margin-top: 0.5rem;
  box-shadow: 2px 3px 28px 0px rgba(0, 0, 0, 0.54);
`;

export const FooterContainer = styled.div`
  backdrop-filter: blur(28.7px);

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 10px;
`;
