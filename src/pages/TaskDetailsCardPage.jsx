import React from "react";
import { Stack } from "@mui/material";
import TaskDetailsCard from "../components/shared/task-details-card/TaskDetailsCard";

export const TaskDetailsCardPage = () => {
  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="flex-start"
      padding="40px"
      sx={{ backgroundColor: "#f5f7fe" }}
    >
      <TaskDetailsCard status="Unasigned" userRole="assigner" />
      <TaskDetailsCard status="Unasigned" userRole="other" />

      <TaskDetailsCard status="Pending" userRole="developer" />
      <TaskDetailsCard status="Pending" userRole="assigner" />
      <TaskDetailsCard status="Pending" userRole="other" />

      <TaskDetailsCard status="In Progress" userRole="developer" />
      <TaskDetailsCard status="In Progress" userRole="assigner" />
      <TaskDetailsCard status="In Progress" userRole="other" />

      <TaskDetailsCard status="In Review" userRole="developer" />
      <TaskDetailsCard status="In Review" userRole="assigner" />
      <TaskDetailsCard status="In Review" userRole="other" />

      <TaskDetailsCard status="Completed" />
    </Stack>
  );
};
