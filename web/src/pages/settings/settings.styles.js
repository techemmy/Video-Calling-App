import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 200px;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 35px;
`;

export const Headings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  color: #000000;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
`;

export const Btn = styled.p`
  font-weight: 500;
  font-size: 28px;
  padding: 7px 48px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background: #0461c4;
    color: #fff;
  }
`;

export const Hr = styled.hr`
  margin-top: 30px;
  color: #000000;
`;

export const CTA = styled.div`
margin-top: 39px;
display: flex;
gap: 58px;
`;

export const Left = styled.div`
flex: 1.5;
display: flex;
flex-direction: column;
gap: 38px;
`;

export const List = styled.div`
display: flex;
align-items: center;
gap: 25px;
color: #35AC39;
cursor: pointer;
padding: 7px 18px;
border-radius: 5px;

&.active {
    background: #0461C4;
    color: #FFFFFF;
}
`;

export const Span = styled.span`
font-weight: 600;
font-size: 32px;
`;

export const Right = styled.div`
flex: 3;
/* background-color: red; */
`;
