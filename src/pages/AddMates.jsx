import React from "react";
import { Container } from "@mui/material";
import { AddMatesDialog } from "../components/add-mates-dialog/addMatesDialog";

const AddMates = () => {
  return (
    <div>
      <Container>
        {/* <AddMatesModal /> */}
        <AddMatesDialog />
      </Container>
    </div>
  );
};

export default AddMates;
