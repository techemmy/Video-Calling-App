import { styled } from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  position: absolute;
  right: -100px;
  bottom: 220px;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
  width: 500px;
  height: 320px;
  border-radius: 5px;
  padding: 5px 15px;

  ${mobile({ width: "340px", right: "-10px" })};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const P = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: normal;
  color: #373131;
  text-align: center;
`;

export const Span = styled.span`
  color: #373131;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${mobile({ fontSize: "0.8rem" })};
`;

export const Button = styled.p`
  border-radius: 5px;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ type }) => (type === "yes" ? " #ff4949" : "none")};
  color: ${({ type }) => (type === "yes" ? " #fff" : "none")};
  border: none;
  margin: 20px auto;
  transition: 0.5s all ease;
`;

export const BtnWrapper = styled.div`
  display: flex;
`;
