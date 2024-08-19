import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: -100px;
  z-index: 10;

  ${mobile({ left: "-250px" })};
`;

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
  width: 300px;
  border-radius: 5px;
`;

export const H2 = styled.h2`
  font-size: 14px;
  color: #ffffff;
`;
export const ListWrapper = styled.div`
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const List = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 2px;
  border-radius: 5px;

  &.more-modal {
    background-color: #fff;
    box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
    width: 300px;
    border-radius: 5px;
  }

  &:hover {
    background-color: #bbb;
  }

  &.active {
    background: #d9d9d9;
  }
`;
export const Span = styled.span`
  color: #212529;
  font-size: 15px;
`;

export const ShareWrapper = styled.div`
  position: relative;
`;
