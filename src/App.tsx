import SideBar from "./components/global/SideBar/SideBar.component.tsx";
import TopBar from "./components/global/TopBar/TopBar.component.tsx";
import { themeSettings } from "./theme/CustomizedTheme.ts";
import Dashboard from "./views/Dashboard/Dashboard.view.tsx";
import { Box, CssBaseline, Experimental_CssVarsProvider } from "@mui/material";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

function App() {
  const theme = extendTheme(themeSettings());

  return (
    <Experimental_CssVarsProvider theme={theme} defaultMode={"dark"}>
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
    </Experimental_CssVarsProvider>
  );
}

export default App;
