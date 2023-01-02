import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Calendar from "../calendar/Calendar";
import CalendarReact from "../calendar-react/CalendarReact";
import { Avatar } from "../../avatar/Avatar";
import Button from "../button/Button";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "258px",
  height: "984px",
  backgroundColor: "#FFFFFF",
  borderRadius: "24px",
  margin: "20px 20px 20px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "96px",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginBottom: "96px !important",
}));

const Username = "Alexandra Buta";
const Email = "email@email.com";

const NameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "-0.02em",
  color: "#101C56",
  marginTop: "24px",
}));

const MailTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "17px",
  letterSpacing: "-0.02em",
  color: "#666666",
  marginTop: "4px",
}));

const MyProfileButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  marginBottom: "66px",
  color: "#FFFFFF",
  fontWeight: "400",
  fontSize: "14px",
  padding: "11px 74px",
  width: "108px",
  height: "39px",
  whiteSpace: "nowrap",
}));

const SidebarRight = () => {
  return (
    <Box>
      <StyledBox>
        <StyledAvatar
          variant="initials"
          firstName="Alexandra"
          lastName="Buta"
        />

        <NameTypography>{Username}</NameTypography>
        <MailTypography>{Email}</MailTypography>
        <MyProfileButton size="medium" variant="contained">
          My Profile
        </MyProfileButton>
        <Calendar></Calendar>
        <CalendarReact></CalendarReact>
      </StyledBox>
    </Box>
  );
};

export default SidebarRight;
