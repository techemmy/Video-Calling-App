import { styled } from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  bottom: 50%;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
  width: 500px;
  height: max-content;
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

export const Button = styled.p`
  border-radius: 5px;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  border: none;
  margin: 20px auto;
  transition: 0.2s all ease;
  color: #ff4949;
  border: 1px solid #ff4949;

  &:hover {
    background-color: #ff4949;
    color: #fff;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
`;
