import { createContext, useMemo, useState } from "react";
import { createTheme, Theme } from "@mui/material";

type ThemeOption = "dark" | "light";

export const tokens = (mode: ThemeOption) => {
  return mode === "dark"
    ? {
        grey: {
          50: "#C2C2C2",
          100: "#B8B8B8",
          200: "#A3A3A3",
          300: "#8F8F8F",
          400: "#7A7A7A",
          500: "#666666",
          600: "#525252",
          700: "#3D3D3D",
          800: "#292929",
          900: "#141414",
          950: "#0A0A0A",
        },
        primary: {
          50: "#4C67AC",
          100: "#465F9E",
          200: "#3A4E82",
          300: "#2D3D65",
          400: "#212C49",
          500: "#141B2D",
          600: "#111726",
          700: "#0E131F",
          800: "#0B0E18",
          900: "#070A11",
          950: "#06080D",
        },
        greenAccent: {
          50: "#DCF5EF",
          100: "#CCF1E7",
          200: "#ACE8D9",
          300: "#8CE0CA",
          400: "#6CD7BB",
          500: "#4CCEAC",
          600: "#31B190",
          700: "#24856C",
          800: "#185948",
          900: "#0C2D25",
          950: "#061713",
        },
        redAccent: {
          50: "#F9E4E3",
          100: "#F6D3D2",
          200: "#EFB2B0",
          300: "#E9918E",
          400: "#E2706C",
          500: "#DB4F4A",
          600: "#C62D27",
          700: "#97221E",
          800: "#681815",
          900: "#390D0B",
          950: "#220807",
        },
        blueAccent: {
          50: "#EDEEFE",
          100: "#DEE0FE",
          200: "#C1C4FD",
          300: "#A3A8FC",
          400: "#868CFB",
          500: "#6870FA",
          600: "#323DF8",
          700: "#0814EA",
          800: "#060FB4",
          900: "#040B7D",
          950: "#030862",
        },
      }
    : {
        grey: {
          50: "#0A0A0A",
          100: "#141414",
          200: "#292929",
          300: "#3D3D3D",
          400: "#525252",
          500: "#666666",
          600: "#7A7A7A",
          700: "#8F8F8F",
          800: "#A3A3A3",
          900: "#B8B8B8",
          950: "#C2C2C2",
        },
        primary: {
          50: "#06080D",
          100: "#070A11",
          200: "#0B0E18",
          300: "#0E131F",
          400: "#111726",
          500: "#141B2D",
          600: "#212C49",
          700: "#2D3D65",
          800: "#3A4E82",
          900: "#465F9E",
          950: "#4C67AC",
        },
        greenAccent: {
          50: "#061713",
          100: "#0C2D25",
          200: "#185948",
          300: "#24856C",
          400: "#31B190",
          500: "#4CCEAC",
          600: "#6CD7BB",
          700: "#8CE0CA",
          800: "#ACE8D9",
          900: "#CCF1E7",
          950: "#DCF5EF",
        },
        redAccent: {
          50: "#220807",
          100: "#390D0B",
          200: "#681815",
          300: "#97221E",
          400: "#C62D27",
          500: "#DB4F4A",
          600: "#E2706C",
          700: "#E9918E",
          800: "#EFB2B0",
          900: "#F6D3D2",
          950: "#F9E4E3",
        },
        blueAccent: {
          50: "#030862",
          100: "#040B7D",
          200: "#060FB4",
          300: "#0814EA",
          400: "#323DF8",
          500: "#6870FA",
          600: "#868CFB",
          700: "#A3A8FC",
          800: "#C1C4FD",
          900: "#DEE0FE",
          950: "#EDEEFE",
        },
      };
};

// mui theme settings
export const themeSettings = (mode: ThemeOption) => {
  const colors = tokens(mode);

  const themeColors = {
    dark: {
      primary: {
        main: colors.primary["500"],
      },
      secondary: {
        main: colors.greenAccent["500"],
      },
      neutral: {
        dark: colors.grey["700"],
        main: colors.grey["500"],
        light: colors.grey["100"],
      },
      background: {
        default: colors.primary["500"],
      },
    },
    light: {
      primary: {
        main: colors.primary["100"],
      },
      secondary: {
        main: colors.greenAccent["500"],
      },
      neutral: {
        dark: colors.grey["700"],
        main: colors.grey["500"],
        light: colors.grey["100"],
      },
      background: {
        default: "#fcfcfc",
      },
    },
  };

  return {
    palette: {
      mode: mode,
      ...themeColors[mode],
      typography: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 12, // Default mui font size
        h1: {
          fontFamily: ["Source Sans 3", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Source Sans 3", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Source Sans 3", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Source Sans 3", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Source Sans 3", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Source Sans 3", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {
    // This is a default function that will be overridden in the provider
  },
});

export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
  const [mode, setMode] = useState<ThemeOption>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
