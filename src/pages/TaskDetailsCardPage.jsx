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
      <TaskDetailsCard
        status="Unasigned"
        userRole="assigner"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="Unasigned"
        userRole="other"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />

      <TaskDetailsCard
        status="Pending"
        userRole="developer"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="Pending"
        userRole="assigner"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="Pending"
        userRole="other"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />

      <TaskDetailsCard
        status="In Progress"
        userRole="developer"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="In Progress"
        userRole="assigner"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="In Progress"
        userRole="other"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />

      <TaskDetailsCard
        status="In Review"
        userRole="developer"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="In Review"
        userRole="assigner"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="In Review"
        userRole="other"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />

      <TaskDetailsCard
        status="Completed"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
    </Stack>
  );
};
