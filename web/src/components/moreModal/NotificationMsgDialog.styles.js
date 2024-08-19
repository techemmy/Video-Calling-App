import { styled } from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  position: absolute;
  left: 20%;
  bottom: 50%;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
  width: 500px;
  height: max-content;
  border-radius: 5px;
  padding: 1rem;

  ${mobile({ width: "100%", left: "0", right: "0" })};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Selected = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5rem;
  margin-top: 10px;
  margin-left: 50px;

  ${mobile({ gap: "10px" })};
`;

export const P = styled.p`
  color: #373131;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${mobile({ fontSize: "1rem", width: "16rem" })};
`;
