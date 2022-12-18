import { useState } from "react";
import PageLayout from "../components/shared/page-layout/PageLayout";

const Tasks = () => {
  const [fakeStatus, setFakeStatus] = useState([
    "Progress",
    "In progress",
    "Complete",
  ]);

  const [fakeTask, SetFakeTask] = useState([
    {
      id: 1,
      name: "Create task 1",
      status: fakeStatus[0],
    },
    {
      id: 2,
      name: "Create task 2",
      status: fakeStatus[1],
    },
    {
      id: 3,
      name: "Create task 3",
      status: fakeStatus[2],
    },
  ]);

  return (
    <PageLayout>
      <p>
        Titlu , search bar , taburi + taskviewer + right bar cu calder pick si
        numele tau si mail
      </p>

      {/* la click pe task => redirect in TaskCardDetailsPage link task/1 etc  */}
      {/* + Create task modala de create #florin  si edit si delete */}
    </PageLayout>
  );
};

export default Tasks;
