import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 28px;
  color: #35ac39;
`;

export const P = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Action = styled.p`
  font-weight: 400;
  font-size: 23px;
  margin-top: 40px;
  width: 191px;
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Desc = styled.span`
  font-weight: 500;
  font-size: 23px;
`;

export const AlertWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
align-items: center;
`;

export const AlertDesc = styled.span`
font-weight: 700;
font-size: 18px;
`;

export const Icon = styled.img`
  cursor: pointer;
`;


export const Size = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 20px;
`;


export const Btns = styled.img`
  cursor: pointer;
  background-color: #0f70d7;
  border-radius: 50%;
  padding: 7px;
`;
