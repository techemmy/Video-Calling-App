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

  ${mobile({ fontSize: "1rem", width: "16rem"})};
`;

export const User = styled.div`
  width: 100px;
  height: 100px;
  background: #0060ff;
  border-radius: 50%;

  /* ${mobile({ width: "5.1rem", height: "5.1rem"})}; */
`;

export const Username = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px auto;
  font-weight: 700;
  font-size: 3rem;
  line-height: normal;
  color: #ffffff;

  ${mobile({ fontSize: "2.5rem", margin: "10px auto" })};
`;

export const Span = styled.span`
  color: #373131;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Button = styled.button`
  background: #0060ff;
  border-radius: 5px;
  padding: 8px 0px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  width: 15.5625rem;
  margin: 10px auto;
`;
