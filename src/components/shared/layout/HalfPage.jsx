import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import loginLeft from "../../../assets/images/login-left.png";
import loginRight from "../../../assets/images/login-right.png";

export const HalfPage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "68.52vh",
  "@media (min-width: 351px)": {
    minWidth: "507px",
  },
  height: "98vh",
  minHeight: "740px",
  marginTop: "1vh",
  marginBottom: "1vh",
  background: `#fff url(${loginLeft}) no-repeat center right`,
  backgroundSize: "cover",
  borderRadius: "32px",
  padding: "24px 100px 100px 100px",
}));
