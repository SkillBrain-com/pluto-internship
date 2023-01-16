import React from "react";
import PageLayout from "../components/shared/page-layout/PageLayout";
import TableComponent from "../components/shared/table-component/TableComponent";
import axios from "axios";
import { useSelector } from "react-redux";

const getAllUsers = async (token) => {
  let result = await axios.get(
    `https://semicolon-task-manager.herokuapp.com/user`,
    {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
  );
  console.log("ALL USERS:", result);
};

const AllUsers = () => {
  const token = useSelector((state) => state.app.auth.loggedUser.accessToken);
  console.log("TOKEN:", token);

  getAllUsers(token);

  return (
    <PageLayout>
      <TableComponent></TableComponent>
    </PageLayout>
  );
};

export default AllUsers;
