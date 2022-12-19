import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  borderRadius: "32px",
}));
