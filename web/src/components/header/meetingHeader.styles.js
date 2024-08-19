import { styled } from "styled-components";
import { laptop, mobile, tablet } from "../../responsive";

export const Container = styled.header`
  width: 100%;
  height: 90px;
  border-width: 1.5px 0px 1.5px 1.5px;
  border-style: solid;
  border-color: rgba(217, 217, 217, 0.29);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  ${mobile({
    borderRadius: "0.56088rem",
    boxShadow:
      "2.6922245025634766px 3.589632749557495px 28.71706199645996px 0px rgba(0, 0, 0, 0.54)",
  })};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Img = styled.img``;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
`;

export const CamWrapper = styled.div`
  /* display: flex;
  align-items: center;
  gap: 30px; */
`;
export const Camera = styled.img`
  margin-right: 40px;
`;
export const Line = styled.div`
  width: 0px;
  height: 130.5px;
  background-color: black;
  border: 0.5px solid rgba(251, 244, 244, 0.58);
`;
export const Headings = styled.div``;

export const HeadingTitle = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

export const Time = styled.span`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
`;

export const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.bgSmall};
  border-radius: 30px;
  gap: 8px;
  padding: 10px 18px;
  cursor: pointer;
  position: relative;

  ${mobile({
    padding: "0px 8px",
    backgroundColor: "#e6edf4",
    border: "1px solid #000000",
    gap: "2px",
  })};
`;

export const Copy = styled.p`
  position: absolute;
  bottom: -400px;
  right: 300px;
  padding: 5px;
  color: #0556e3;
  font-size: 30px;
  z-index: 10;
  animation: fadeOut 1s ease-out;
  animation-delay: 1s;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Smalline = styled.div`
  width: 1.45px;
  height: 20.26px;
  background: #0060ff;
  border: 0.5px solid rgba(251, 244, 244, 0.58);
`;

export const Smalltext = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #0060ff;

  ${tablet({
    width: "max-content",
  })};
`;

export const ParticipantImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Pimg = styled.img`
  position: absolute;
  top: -30px;
`;

export const Span = styled.span`
  position: absolute;
  width: 3.4375rem;
  height: 3.4375rem;
  border-radius: 3.4375rem;
  border: 3px solid #fff;
  background: #dfebff;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.bgLighter};
  border-radius: 83px;
  padding: 10px 17px;
  width: 250px;

  ${mobile({ display: "none" })};
  ${tablet({})};
`;

export const UserDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`;

export const UserInfo = styled.div``;
export const UserImg = styled.img`
  border: 2px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
export const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.soft};

  ${tablet({ fontSize: "12px" })};
`;
export const Title = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 4px;
  color: #9e9e9e;

  ${tablet({ fontSize: "10px" })};
`;

// Mobile

export const MobileWrapper = styled.div`
  width: 100%;
  height: 2rem;

  ${laptop({ display: "none" })};
  ${tablet({ display: "none" })};
  ${mobile({ display: "block" })};
`;

export const HeaderWrapper = styled.div`
  backdrop-filter: blur(28.71706199645996px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const UserPart = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 0.3365rem;
  background: #4a5767;
  backdrop-filter: blur(1.7948163747787476px);
  padding: 5px;
  color: #fff;
  font-size: 0.76088rem;
  cursor: pointer;
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Notification = styled.div`
  position: relative;
  color: #fff;
`;

export const Badge = styled.span`
  position: absolute;
  top: -12px;
  left: 12px;
  color: #fff;
  border-radius: 50%;
  background-color: #009d23;
  font-size: 12px;
  font-weight: 400;
  padding: 2px 5px;
`;
