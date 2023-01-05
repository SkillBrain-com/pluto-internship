import React from "react";
import { useState } from "react";
import PageLayout from "../components/shared/page-layout/PageLayout";
import TaskViewer from "../components/shared/task-viewer/TaskViewer";
import { fetchTasksAction } from "../store/task/task.slice";
import { useDispatch, useSelector } from "react-redux";

const Tasks = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, [dispatch]);

  const tasks = useSelector((state) => state.entities.tasks.data);

  return (
    <PageLayout>
      <p>
        Titlu , search bar , taburi + taskviewer + right bar cu calder pick si
        numele tau si mail
      </p>
      <TaskViewer tasksData={tasks} />

      {/* la click pe task => redirect in TaskCardDetailsPage link task/1 etc  */}
      {/* + Create task modala de create #florin  si edit si delete */}
    </PageLayout>
  );
};

export default Tasks;
