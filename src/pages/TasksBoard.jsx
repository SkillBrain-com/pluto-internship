import React from "react";
import { Breadcrumbs, Box, IconButton, Link, Typography } from "@mui/material";
import PageLayout from "../components/shared/page-layout/PageLayout";
import TaskDetailsCard from "../components/shared/task-details-card/TaskDetailsCard";
import arrowLeft from "../assets/images/arrow-left.png";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const TasksBoard = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{
          marginTop: "40px",
          fontWeight: 500,
          fontSize: "24px",
          color: "#101C56",
        }}
      >
        <Link
          underline="hover"
          sx={{
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "38px",
            letterSpacing: "-0.02em",
            color: "#101C56",
          }}
          href="/tasks"
        >
          Tasks
        </Link>
        <Typography variant="body2">{id}</Typography>
      </Breadcrumbs>
      <IconButton sx={{ padding: "20px" }} component={RouterLink} to="/tasks">
        <img
          src={arrowLeft}
          alt="back to tasks"
          sx={{
            width: "20px",
            height: "20px",
          }}
        />
      </IconButton>
      <TaskDetailsCard status="Unasigned" userRole="other" />
    </PageLayout>
  );
};

export default TasksBoard;
