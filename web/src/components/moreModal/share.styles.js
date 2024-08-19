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
  gap: 10px;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5rem;

  ${mobile({ gap: "10px" })};
`;

export const DetailsP = styled.p`
  color: #373131;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${mobile({ fontSize: "1rem" })};
`;

export const P = styled.p`
  color: #373131;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1.5rem;

  ${mobile({ fontSize: "0.8rem" })};
`;

export const Input = styled.input`
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 10px;

  ${mobile({ padding: "10px 20px" })};
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  color: #373131;

  ${mobile({ fontSize: "0.8rem" })};
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

  ${mobile({ width: "13rem", padding: "5px 0px", fontWeight: "400" })};
`;
