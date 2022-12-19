import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicCard from "../card-component/Card-Component";

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "100%",
    backgroundColor: "#F5F7FE",
    minHeight: "100vh",
    rowGap: "20px",
    "@media (min-width: 1921px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    "@media (max-width: 1450px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 1076px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
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
