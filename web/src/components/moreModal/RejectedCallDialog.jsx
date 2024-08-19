import { Close } from "@mui/icons-material";
import { Container, P, Wrapper } from "./RejectedCallDialog.styles.js";
import { useEffect } from "react";

const RejectedCallDialog = ({ reason, hideCallRejectedDialog }) => {
  useEffect(() => {
    setTimeout(() => {
      hideCallRejectedDialog({
        rejected: false,
        reason: "",
      });
    }, 4000);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Close
          onClick={() => {
            hideCallRejectedDialog({
              rejected: false,
              reason: "",
            });
          }}
          style={{
            display: "flex",
            alignSelf: "end",
            cursor: "pointer",
            fontSize: "40px",
          }}
        />
        <P>{reason}</P>
      </Wrapper>
    </Container>
  );
};

export default RejectedCallDialog;
