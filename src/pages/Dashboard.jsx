import React from "react";
import { useState } from "react";
import PageLayout from "../components/shared/page-layout/PageLayout";
import { fetchTasksAction } from '../store/task/task.slice'
import { useDispatch,useSelector } from "react-redux";
const Dashboard = () => {


  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTasksAction())
		
	}, [dispatch]);

  const tasks  = useSelector((state) => state.entities.tasks.data);

    console.log("abc 0", tasks)
  return (
    <PageLayout>
      <h1>Dashboard here</h1>
    </PageLayout>
  );
};

export default Dashboard;
