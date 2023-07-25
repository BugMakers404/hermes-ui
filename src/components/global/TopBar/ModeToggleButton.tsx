import { ColorModeContext } from "../../../theme/theme.hook.ts";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";

export default function ModeToggleButton() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <IconButton size="small" onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
    </IconButton>
  );
}
