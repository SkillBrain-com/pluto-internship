import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0px",
    left: "0px",
  },
}));

const EmptyListMessage = () => {
  return <StyledBox>Empty List Message</StyledBox>;
};

export default EmptyListMessage;
