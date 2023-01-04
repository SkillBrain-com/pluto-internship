import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SideBar from "../side-bar/SideBar";
import SidebarRight from "../side-bar-right/SidebarRight";
import { useSelector } from "react-redux";
import { useState } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    display: "grid",
    gridTemplateColumns: "auto 280px",
    gap: "20px",
    width: "100%",
    backgroundColor: "#F5F7FE",
    minHeight: "100vh",
  },
  "& .page-main-container": {
    display: "flex",
    gap: "20px",
  },
  "& .page-main-col": {
    width: "100%",
    "@media (min-width: 2561px)": {
      marginRight: "210px",
    },
  },
}));

const PageLayout = (props) => {
  // const [data, setData] = useState([]);
  // setData( useSelector((state) => state.app.auth.loggedUser.userInfo));
  const data = useSelector((state) => state.app.auth.loggedUser.userInfo)
  return (
    <StyledBox>
      <Box className="page-main-container">
        <SideBar />
        <Box className="page-main-col">
          <Box>Search bar</Box>
          {props.children}
        </Box>
      </Box>
      <SidebarRight userInfo={data} />
    </StyledBox>
  );
};

export default PageLayout;
