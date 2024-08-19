import { styled } from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  position: absolute;
  right: -50px;
  top: -370px;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
  width: 400px;
  border-radius: 5px;
  padding: 10px 30px;
  z-index: 10;

  ${mobile({ left: "-37px", top: "-340px", width: "350px" })}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Headings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
`;

export const P = styled.p`
  font-weight: 500;
  font-size: 22px;
`;

export const Textarea = styled.textarea`
  padding: 5px 30px;
  border-radius: 10px;
  width: 320px;
  height: 150px;

  &::placeholder {
    font-weight: 600;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.25);

    ${mobile({ fontSize: "13px", fontWeight: "700" })}
  }

  ${mobile({ width: "270px", fontSize: "10px" })}
`;

export const Response = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ResTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

export const Options = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

export const Option = styled.span`
  border: 1px solid #000000;
  border-radius: 7px;
  padding: 5px;
  text-align: center;
  margin-top: 5px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    background: #d9d9d9;
  }

  &.active {
    background: #d9d9d9;
  }
`;

export const ResponseWrapper = styled.div`
  margin-top: 10px;
`;
