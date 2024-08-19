import { styled } from "styled-components";
import { mobile, tab, tablet } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  overflow: hidden;
`;
export const Wrapper = styled.div`
  display: flex;
  ${mobile({ display: "block" })}
`;

export const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  ${tablet({ flex: "1" })}
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${tablet({ display: "none" })};
`;

export const MobileWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  ${tab({ display: "none" })}
`;
