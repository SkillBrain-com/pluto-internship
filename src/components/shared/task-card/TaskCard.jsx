import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box, Link, IconButton } from "@mui/material";
import Badge from "../Badge/Badge";
import arrowRight from "../../../assets/images/arrow-right.png";

const selectBadgeColor = (status) => {
  switch (status) {
    case "Unasigned":
      return "unassigned";
    case "Pending":
      return "pending";
    case "In Progress":
      return "inProgress";
    case "In Review":
      return "inReview";
    case "Completed":
      return "completed";
    default:
      return "inProgress";
  }
};

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    width: "248px",
    height: "170px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "24px 21px",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: "12px",
  },
  "& .card-header": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  "& .card-header .card-id": {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "17px",
    letterSpacing: "-0.02em",
    color: "#B9B9B9",
  },
  "& .card-body": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  "& .card-body .card-title": {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "-0.02em",
    color: "#16171D",
    maxHeight: "66px",
    overflow: "hidden",
  },
  "& .card-footer": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    gap: "15px",
  },
  "& .card-footer .card-link": {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "17px",
    letterSpacing: "-0.02em",
    color: "#3754DB",
    textDecoration: "none",
    cursor: "pointer",
  },
}));

const TaskCard = ({ status, title, id }) => {
  return (
    <StyledBox>
      <Box className="card-header">
        <Box>
          <Typography className="card-id">{id}</Typography>
        </Box>
        <Badge
          variant="standard"
          badgeContent={status}
          color={selectBadgeColor(status)}
          sx={{ marginRight: "40px", marginTop: "5px" }}
        ></Badge>
      </Box>
      <Box className="card-body">
        <Typography className="card-title">{title}</Typography>
      </Box>
      <Box className="card-footer">
        <Link
          className="card-link"
          href={`/tasks-board/${id}`}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "15px",
          }}
        >
          View Task
          <img
            src={arrowRight}
            alt="view task"
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
        </Link>
      </Box>
    </StyledBox>
  );
};

export default TaskCard;
