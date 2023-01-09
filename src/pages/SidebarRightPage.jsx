import React from "react";
import SidebarRight from "../components/shared/side-bar-right/SidebarRight";
import { Box } from "@mui/system";

const SidebarRightPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        width: "100%",
        height: "100%",
        backgroundColor: "#F6F8FD",
      }}
    >
      <SidebarRight></SidebarRight>
    </Box>
  );
};

export default SidebarRightPage;
