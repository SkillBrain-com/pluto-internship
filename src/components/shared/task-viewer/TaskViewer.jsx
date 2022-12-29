import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TaskCard from "../task-card/TaskCard";
import EmptyListMessage from "../empty-list-message/EmptyListMessage";

const fakeDataEmpty = [];
const fakeData = [
  {
    id: "T-1",
    title: "Create a Design System for Enum Workspace.",
    status: "In Progress",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-2",
    title: "12 Create a Design System for Enum Workspace.",
    status: "In Progress",
    dueDate: new Date(2022, 7, 24),
  },
  {
    id: "T-3",
    title: "13 Create a Design System for Enum Workspace.",
    status: "Completed",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-4",
    title: "14 Create a Design System for Enum Workspace.",
    status: "Pending",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-5",
    title: "15 Create a Design System for Enum Workspace.",
    status: "Completed",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-6",
    title: "Create a Design System for Enum Workspace.",
    status: "Unasigned",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-7",
    title: "16 Create a Design System for Enum Workspace.",
    status: "In Review",
    dueDate: new Date(2022, 5, 23),
  },
];

const renderTasks = (data) => {
  if (data.length > 0) {
    let displayedItems = data.map((item) => (
      <TaskCard
        key={item.id}
        id={item.id}
        status={item.status}
        title={item.title}
      />
    ));
    return displayedItems;
  } else {
    return <EmptyListMessage />;
  }
};

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
    position: "relative",
  },
}));

const TaskViewer = () => {
  return <StyledBox>{renderTasks(fakeDataEmpty)}</StyledBox>;
};

export default TaskViewer;
