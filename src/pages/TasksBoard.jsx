import React, { useState } from "react";
import { Breadcrumbs, IconButton, Link, Typography } from "@mui/material";
import PageLayout from "../components/shared/page-layout/PageLayout";
import TaskDetailsCard from "../components/shared/task-details-card/TaskDetailsCard";
import arrowLeft from "../assets/images/arrow-left.png";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchTasksAction } from "../store/task/task.slice";
import { useDispatch, useSelector } from "react-redux";

const TasksBoard = () => {
  const params = useParams();
  console.log("PARAMS:", params.id);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, [dispatch]);

  const tasks = useSelector((state) =>
    state.entities.tasks.data.find((item) => item.id === parseInt(params.id))
  );

  console.log("tasks:", tasks);

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
        <Typography variant="body2">{params.id}</Typography>
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
      <TaskDetailsCard
        title={tasks.title}
        description={tasks.description}
        createdAt={tasks.createdAt}
        dueDate={tasks.dueDate}
        status="Unasigned"
        userRole="other"
      />
    </PageLayout>
  );
};

export default TasksBoard;
