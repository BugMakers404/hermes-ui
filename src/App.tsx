import SideBar from "./components/global/SideBar/SideBar.component.tsx";
import TopBar from "./components/global/TopBar/TopBar.component.tsx";
import { ColorModeContext, useMode } from "./theme/theme.hook.ts";
import Dashboard from "./views/Dashboard/Dashboard.view.tsx";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />

          <div className="content">
            <TopBar />
            <Box component="main" p={3}>
              <Dashboard />
            </Box>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
