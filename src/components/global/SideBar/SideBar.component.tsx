import SideBarFoot from "./SideBarFoot/SideBarFoot.component.tsx";
import SideBarHeader from "./SideBarHeader/SideBarHeader.component.tsx";
import StyledSideBar from "./SiderBar.styles.ts";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const handleOpenAndClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <StyledSideBar variant="permanent" open={open}>
      <SideBarHeader isSideBarOpen />
      <Divider />
      <List>
        <ListItem key={"Dashboard"} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
              <DashboardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <SideBarFoot open={open} handleOpenAndClose={handleOpenAndClose} />
    </StyledSideBar>
  );
};

export default SideBar;
