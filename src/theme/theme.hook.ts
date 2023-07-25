import { themeSettings } from "./theme.styles.ts";
import { PaletteMode, createTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
