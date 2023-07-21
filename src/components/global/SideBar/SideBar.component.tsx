import StyledSideBar from "./SiderBar.styles.ts";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const handleSideBarOpenAndClose = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <StyledSideBar variant="permanent" open={isSideBarOpen}>
      <ListItem
        disablePadding
        sx={{
          display: "flex",
          minHeight: 48,
          justifyContent: isSideBarOpen ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{ minWidth: 0, mr: isSideBarOpen ? 3 : "auto", justifyContent: "center" }}
        >
          <AccessibleForwardIcon />
        </ListItemIcon>
        <ListItemText primary={"Hermes"} sx={{ opacity: isSideBarOpen ? 1 : 0 }} />
      </ListItem>
      <Divider />
      <List>
        <ListItem key={"Dashboard"} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: isSideBarOpen ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{ minWidth: 0, mr: isSideBarOpen ? 3 : "auto", justifyContent: "center" }}
            >
              <DashboardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} sx={{ opacity: isSideBarOpen ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <ListItem>
        <ListItemButton
          sx={{
            height: 48,
            justifyContent: isSideBarOpen ? "initial" : "center",
            px: 2.5,
          }}
          onClick={handleSideBarOpenAndClose}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isSideBarOpen ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <MailIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </StyledSideBar>
  );
};

export default SideBar;
