import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TaskCard from "../task-card/TaskCard";

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 270px)",
    gridTemplateRows: "repeat(auto-fill, 170px)",
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
      <TaskCard status="Unasigned" title="Design a system for Enum workspace" />
      <TaskCard
        status="Pending"
        title="Design a system for Enum workspace doi"
      />
      <TaskCard
        status="In Progress"
        title="Design a system for Enum workspace trei"
      />
      <TaskCard
        status="In Review"
        title="Design a system for Enum workspace patru"
      />
      <TaskCard
        status="Completed"
        title="Design a system for Enum workspace cinci"
      />
      <TaskCard
        status="Pending"
        title="Design a system for Enum workspace sase"
      />
      <TaskCard
        status="In Progress"
        title="Design a system for Enum workspace sapte"
      />
      <TaskCard
        status="Completed"
        title="Design a system for Enum workspace opt"
      />
      <TaskCard
        status="In Review"
        title="Design a system for Enum workspace noua"
      />
      <TaskCard
        status="Unasigned"
        title="Design a system for Enum workspace zece"
      />
      <TaskCard
        status="In Progress"
        title="Design a system for Enum workspace unsprezece"
      />
      <TaskCard
        status="Completed"
        title="Design a system for Enum workspace doisprezece"
      />
    </StyledBox>
  );
};

export default TaskViewer;
