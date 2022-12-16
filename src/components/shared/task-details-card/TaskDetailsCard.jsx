import React from "react";
import { Typography, Box, CardActions, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "../Badge/Badge";
import Button from "../button/Button";
import TaskActions from "../task-actions/TaskActions";
import AvatarWithName from "../../avatar/AvatarWithName";
import emptyCercle from "./images/cercle-empty.png";
import fullCercle from "./images/cercle-full.png";
import completedCheck from "./images/completed.png";

const StyledCard = styled(Box)(({ theme }) => ({
  "&": {
    width: "94%",
    maxWidth: "780px",
    backgroundColor: "#fff",
    margin: "20px auto 20px 0px",
    borderRadius: "16px",
    padding: "32px 40px 32px 26px",
    display: "grid",
    gridTemplateColumns: "auto 120px",
  },
  "& .card-details-content-text": {
    color: "#808080",
    padding: "20px 20px 0px 0px",
  },
  "& .card-actions": {
    display: "flex",
    gap: "20px",
    justifyContent: "flex-start",
  },
  "& .dates-div": {
    height: "206px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRight: "0.6px solid #D5D5D5",
    width: "100px",
    position: "relative",
  },
  "& .empty-cercle": {
    position: "absolute",
    top: "0px",
    right: "-15px",
  },
  "& .full-cercle": {
    position: "absolute",
    bottom: "0px",
    right: "-15px",
  },
  "& .date-title": {
    color: "#808080",
    fontSize: "12px",
  },
}));

const renderSwitch = (status, userRole) => {
  switch (status) {
    case "Unasigned":
      if (userRole === "other") {
        return (
          <CardActions className="card-actions">
            <Button size="medium" variant="contained">
              Request Task
            </Button>
          </CardActions>
        );
      }
      if (userRole === "assigner") {
        return (
          <CardActions className="card-actions">
            <Button size="medium" variant="contained">
              Assign this task
            </Button>
            <TaskActions trash edit message />
          </CardActions>
        );
      }
      break;
    case "Pending":
      if (userRole === "developer") {
        return (
          <>
            <AvatarWithName
              userName="Adeeko Emmanuel Blu"
              userRole="developer"
            />
            <CardActions className="card-actions">
              <Button size="medium" variant="contained">
                Work on it
              </Button>
            </CardActions>
          </>
        );
      }
      if (userRole === "assigner") {
        return (
          <CardActions className="card-actions">
            <Button size="medium" variant="outlined">
              Re-assign task
            </Button>
            <TaskActions trash edit message />
          </CardActions>
        );
      }
      if (userRole === "other") {
        return (
          <CardActions className="card-actions">
            <Button size="medium" variant="contained">
              Work on it Now
            </Button>
          </CardActions>
        );
      }
      break;
    case "In Progress":
      if (userRole === "developer") {
        return (
          <>
            <AvatarWithName
              userName="Adeeko Emmanuel Blu"
              userRole="developer"
            />
            <CardActions className="card-actions">
              <Button
                size="medium"
                variant="contained"
                sx={{ backgroundColor: "#8937DB" }}
              >
                Send for Review
              </Button>
            </CardActions>
          </>
        );
      }
      if (userRole === "assigner") {
        return (
          <CardActions className="card-actions">
            <Button
              size="medium"
              variant="contained"
              sx={{ backgroundColor: "#00C271" }}
            >
              Mark As Done
            </Button>
            <TaskActions trash edit />
          </CardActions>
        );
      }
      if (userRole === "other") {
        return (
          <CardActions className="card-actions">
            <Button
              size="medium"
              variant="contained"
              sx={{ backgroundColor: "#8937DB" }}
            >
              Send for Review
            </Button>
          </CardActions>
        );
      }
      break;
    case "In Review":
      if (userRole === "developer") {
        return (
          <>
            <AvatarWithName
              userName="Adeeko Emmanuel Blu"
              userRole="developer"
            />
            <CardActions className="card-actions">
              <Typography variant="subtitle2" sx={{ color: "#001E99" }}>
                The assigner of your task gets to tell if if it’s done or not.
                Kindly check back later.
              </Typography>
            </CardActions>
          </>
        );
      }
      if (userRole === "assigner") {
        return (
          <>
            <AvatarWithName userName="Adeeko Emmanuel" userRole="assigner" />
            <CardActions className="card-actions">
              <Button
                size="medium"
                variant="contained"
                sx={{ backgroundColor: "#00C271" }}
              >
                Mark As Done
              </Button>
              <TaskActions trash edit message />
            </CardActions>
          </>
        );
      }
      if (userRole === "other") {
        return;
      }
      break;
    case "Completed":
      return (
        <CardActions className="card-actions">
          <img src={completedCheck} alt="Check" width="32px" height="32px" />
          <Typography
            variant="subtitle2"
            sx={{
              color: "#00A35F",
              fontWeight: 500,
              fontSize: "16px",
              linEheight: "19PX",
            }}
          >
            This task has been completed
          </Typography>
          <TaskActions trash edit />
        </CardActions>
      );
    default:
      return `1 default card`;
  }
};

const TaskDetailsCard = ({ status, userRole }) => {
  return (
    <StyledCard>
      <Box>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Create a Design System for Enum Workspace.
          </Typography>
          <Badge
            variant="standard"
            badgeContent={status}
            color="inProgress"
            sx={{ marginLeft: "40px" }}
          ></Badge>
          <Typography variant="body1" className="card-details-content-text">
            I am to create a simple design system to use to teach aspiring UI /
            UX Designers in my forth-coming cass on the 2nd of october 20201
          </Typography>
        </CardContent>
        {renderSwitch(status, userRole)}
      </Box>
      <Box>
        <Box className="dates-div">
          <img src={emptyCercle} className="empty-cercle" alt="Date Created" />
          <img src={fullCercle} className="full-cercle" alt="Due Date" />
          <Box>
            <Typography variant="subtitle1" className="date-title">
              Date Created
            </Typography>
            <Typography variant="subtitle2">24/11/22</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" className="date-title">
              Due Date
            </Typography>
            <Typography variant="subtitle2">29/12/22</Typography>
          </Box>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default TaskDetailsCard;
