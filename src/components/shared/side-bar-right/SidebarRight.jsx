import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Calendar from "../calendar/Calendar";
import { Style } from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "258px",
  height: "984px",
  backgroundColor: "#FFFFFF",
  borderRadius: "24px",
  margin: "20px 20px 20px 0",
}));

const SidebarRight = () => {
  return (
    <StyledBox>
      <Calendar></Calendar>
    </StyledBox>
  );
};

export default SidebarRight;
