import { ColorModeContext, tokens } from "../theme/theme.ts";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
      <Box sx={{ display: "flex", bgcolor: colors.primary["400"], borderRadius: 3 }}>
        <InputBase sx={{ marginLeft: 2, flex: 1 }} placeholder="Search" />
        <IconButton type={"button"} sx={{ padding: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
