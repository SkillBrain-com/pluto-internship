import React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./SideBar.css";
import avatarPlaceholder from "./images/avatar.png";
import addAvatar from "./images/add-avatar.png";
import overviewIconPlaceholder from "./images/overview-icon-placeholder.png";
import tasksIconPlaceholder from "./images/tasks-icon-placeholder.png";
import settingsIconPlaceholder from "./images/settings-icon-placeholder.png";

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `80px`,
  [theme.breakpoints.up("sm")]: {
    width: `80px`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((open) => !open);
  };

  return (
    <div sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <div className="sidebar-container">
          <div className="sidebar-left">
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                marginRight: 0,
                color: "#ffffff",
                backgroundColor: "#3754db",
                marginBottom: "40px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <div className="sidebar-avatar sidebar-selected-avatar">
              <img src={avatarPlaceholder} alt="avatarPlaceholder" />
            </div>
            <div className="sidebar-avatar">
              <img src={avatarPlaceholder} alt="avatarPlaceholder" />
            </div>
            <div className="sidebar-avatar">
              <img src={avatarPlaceholder} alt="avatarPlaceholder" />
            </div>
            <div className="sidebar-add-avatar">
              <img src={addAvatar} alt="add more" />
            </div>
          </div>
          <div className="sidebar-main">
            <div className="workplace-title">
              <Typography variant="h6" classes="workplace-main-title">
                My Space
              </Typography>
              <Typography variant="paragraph" classes="workplace-subtitle">
                Workplace Title
              </Typography>
            </div>
            <ul className="sidebar-main-menu">
              <li className="sidebar-menu-item">
                <img
                  src={overviewIconPlaceholder}
                  alt="overview icon placeholder"
                />
                <a href="#" className="sidebar-link-item">
                  <Typography variant="paragraph">Overview</Typography>
                </a>
              </li>
              <li className="sidebar-menu-item active">
                <img src={tasksIconPlaceholder} alt="tasks icon placeholder" />
                <a href="#" className="sidebar-link-item">
                  <Typography variant="paragraph">Tasks</Typography>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <img
                  src={settingsIconPlaceholder}
                  alt="settings icon placeholder"
                />
                <a href="#" className="sidebar-link-item">
                  <Typography variant="paragraph">Settings</Typography>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
