import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SideBar from "../side-bar/SideBar";

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    display: "grid",
    gridTemplateColumns: "80px auto 260px",
    gap: "20px",
    width: "100%",
    backgroundColor: "#F5F7FE",
    minHeight: "100vh",
    "@media (min-width: 1921px)": {
      gridTemplateColumns: "290px auto 260px",
    },
  },
  "& .page-main-col": {
    "@media (min-width: 2561px)": {
      marginRight: "210px",
    },
  },
}));

const PageLayout = (props) => {
  return (
    <StyledBox>
      <Box>
        <SideBar />
      </Box>
      <Box className="page-main-col">
        <Box>Search bar</Box>
        {props.children}
      </Box>
      <Box>Right Sidebar</Box>
    </StyledBox>
  );
};

export default PageLayout;
