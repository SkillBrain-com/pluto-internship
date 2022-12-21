import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicCard from "../card-component/Card-Component";

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 376px)",
    gridTemplateRows: "repeat(auto-fill, 240px)",
    width: "100%",
    backgroundColor: "#F5F7FE",
    minHeight: "100vh",
    gap: "auto",
    rowGap: "20px",
  },
}));

const TaskViewer = () => {
  return (
    <StyledBox>
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
    </StyledBox>
  );
};

export default TaskViewer;
