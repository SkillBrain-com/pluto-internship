import React from "react";
import SidebarRight from "../components/shared/side-bar-right/SidebarRight";
import { Box } from "@mui/system";
import Calendar from "../components/shared/calendar/Calendar";

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
      <SidebarRight>
        <Calendar></Calendar>
      </SidebarRight>
    </Box>
  );
};

export default SidebarRightPage;
