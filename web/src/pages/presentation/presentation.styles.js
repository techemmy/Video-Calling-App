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
  margin-top: 20px;
`;

export const Headings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  color: #000000;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const Btn = styled.p`
  font-weight: 500;
  font-size: 20px;
  padding: 7px 30px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background: #0461c4;
    color: #fff;
  }
`;

export const Hr = styled.hr`
  margin-top: 15px;
  color: #000000;
`;

export const CTA = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Desc = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
`;

export const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
`;

export const FileDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const FileTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  background: #0461c4;
  padding: 0px 20px;
  border-radius: 4px;
  color: #fff;
`;

export const FileName = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #35ac39;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Icon = styled.img`
  cursor: pointer;
`;

export const Upload = styled.div`
  border: 3px dashed #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0;
  gap: 20px;
`;

export const P = styled.p`
font-weight: 500;
font-size: 20px;
line-height: 29px;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #0060FF;
cursor: pointer;
`;