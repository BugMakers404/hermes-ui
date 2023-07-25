import { colorPalette } from "./theme.colors.ts";
import { PaletteMode } from "@mui/material";

// mui theme settings
export const themeSettings = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colorPalette(mode).primary["500"],
            },
            secondary: {
              main: colorPalette(mode).greenAccent["500"],
            },
            neutral: {
              dark: colorPalette(mode).grey["700"],
              main: colorPalette(mode).grey["500"],
              light: colorPalette(mode).grey["100"],
            },
            background: {
              default: colorPalette(mode).primary["500"],
            },
          }
        : {
            primary: {
              main: "#C62D27",
            },
            secondary: {
              main: colorPalette(mode).greenAccent["500"],
            },
            neutral: {
              dark: colorPalette(mode).grey["700"],
              main: colorPalette(mode).grey["500"],
              light: colorPalette(mode).grey["100"],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontSize: 12,
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: colorPalette(mode).primary["400"],
          },
        },
      },
    },
  };
};
