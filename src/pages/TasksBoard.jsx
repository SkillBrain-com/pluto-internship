import React from "react";
import PageLayout from "../components/shared/page-layout/PageLayout";
import TaskDetailsCard from "../components/shared/task-details-card/TaskDetailsCard";

const TasksBoard = () => {
  return (
    <PageLayout>
      <TaskDetailsCard status="Unasigned" userRole="other" />
    </PageLayout>
  );
};

export default TasksBoard;
