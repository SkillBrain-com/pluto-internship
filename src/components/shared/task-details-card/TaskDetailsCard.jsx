import React from "react";
import {
  Typography,
  Box,
  CardActions,
  CardContent,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "../Badge/Badge";
import Button from "../button/Button";
import emptyCercle from "./images/cercle-empty.png";
import fullCercle from "./images/cercle-full.png";
import deletePlaceholder from "./images/delete-placeholder.png";
import editPlaceholder from "./images/edit-placeholder.png";
import messagePlaceholder from "./images/message-placeholder.png";

const StyledCard = styled(Box)(({ theme }) => ({
  "&": {
    width: "94%",
    maxWidth: "780px",
    backgroundColor: "#fff",
    margin: "20px auto 20px 40px",
    borderRadius: "16px",
    padding: "32px 40px 32px 26px",
    display: "grid",
    gridTemplateColumns: "auto 120px",
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
}));

const TaskDetailsCard = () => {
  return (
    <StyledCard>
      <Box>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Create a Design System for Enum Workspace.
          </Typography>
          <Badge
            variant="standard"
            badgeContent={"In Progress"}
            color="inProgress"
            sx={{ marginLeft: "40px" }}
          ></Badge>
          <Typography
            variant="body1"
            sx={{ color: "#808080", padding: "20px 20px 0px 0px" }}
          >
            I am to create a simple design system to use to teach aspiring UI /
            UX Designers in my forth-coming cass on the 2nd of october 20201
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", gap: "20px", justifyContent: "flex-start" }}
        >
          <Button
            size="medium"
            variant="contained"
            sx={{ backgroundColor: "#00C271" }}
          >
            Mark As Done
          </Button>
          <IconButton>
            <img src={deletePlaceholder} />
          </IconButton>
          <IconButton>
            <img src={editPlaceholder} />
          </IconButton>
          <IconButton>
            <img src={messagePlaceholder} />
          </IconButton>
        </CardActions>
      </Box>
      <Box>
        <Box
          sx={{
            height: "206px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderRight: "0.6px solid #D5D5D5",
            width: "100px",
            position: "relative",
          }}
        >
          <img src={emptyCercle} className="empty-cercle" />
          <img src={fullCercle} className="full-cercle" />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: "#808080", fontSize: "12px" }}
            >
              Date Created
            </Typography>
            <Typography variant="subtitle2">24/11/22</Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: "#808080", fontSize: "12px" }}
            >
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
