import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const ResTitle = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Option = styled.span`
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 5px 50px;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  width: max-content;
`;

export const Add = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const Btn = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: #0060ff;
`;

export const Anonymous = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Desc = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

export const ToggleBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`;

export const ToggleImg = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  cursor: pointer;
`;

export const Span = styled.span``;

export const Button = styled.button`
  background: #0060ff;
  border-radius: 7px;
  padding: 5px 0px;
  font-weight: 500;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;
