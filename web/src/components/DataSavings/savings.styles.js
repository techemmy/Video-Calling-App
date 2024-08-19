import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 32px;
  color: #35ac39;
`;

export const P = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 38px;
`;

export const Action = styled.p`
  font-weight: 600;
  font-size: 27px;
  line-height: 41px;
  color: rgba(0, 0, 0, 0.65);
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  gap: 47px;
`;

export const Desc = styled.span`
  font-weight: 500;
  font-size: 32px;
`;

export const Icon = styled.img`
  cursor: pointer;
`;

export const Lang = styled.div`
  width: 40%;
`;

export const StyledSelect = styled.select`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  background-color: transparent;
  padding: 5px;
  font-size: 16px;
  color: #000;
  cursor: pointer;
`;

export const Hr = styled.hr`
  margin-top: 50px;
`;

export const Size = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 72px;
`;

export const Btns = styled.img`
  cursor: pointer;
  background-color: #0f70d7;
  border-radius: 50%;
  padding: 7px;
`;
