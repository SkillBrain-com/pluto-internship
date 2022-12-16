import React from "react";
import { IconButton } from "@mui/material";
import deletePlaceholder from "../task-details-card/images/delete-placeholder.png";
import editPlaceholder from "../task-details-card/images/edit-placeholder.png";
import messagePlaceholder from "../task-details-card/images/message-placeholder.png";

const renderTrashIcon = (icon) => {
  if (icon) {
    return (
      <IconButton>
        <img src={deletePlaceholder} alt="Delete" />
      </IconButton>
    );
  }
};

const renderEditIcon = (icon) => {
  if (icon) {
    return (
      <IconButton>
        <img src={editPlaceholder} alt="Edit" />
      </IconButton>
    );
  }
};

const renderMessageIcon = (icon) => {
  if (icon) {
    return (
      <IconButton>
        <img src={messagePlaceholder} alt="Message" />
      </IconButton>
    );
  }
};

const TaskActions = ({ trash, edit, message }) => {
  return (
    <>
      {renderTrashIcon(trash)}
      {renderEditIcon(edit)}
      {renderMessageIcon(message)}
    </>
  );
};

export default TaskActions;
