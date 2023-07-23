import StyledSideBarHeader from "./SideBarHeader.styles.ts";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const SideBarHeader = ({ open }: { open: boolean }) => {
  return (
    <StyledSideBarHeader>
      <ListItem
        disablePadding
        sx={{
          display: "flex",
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2,
        }}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
          <AccessibleForwardIcon />
        </ListItemIcon>
        <ListItemText primary={"Hermes"} sx={{ opacity: open ? 1 : 0 }} />
      </ListItem>
    </StyledSideBarHeader>
  );
};

export default SideBarHeader;
