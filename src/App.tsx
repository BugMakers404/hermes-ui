import { themeSettings } from "./theme/CustomizedTheme.ts";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Box, CssBaseline, Experimental_CssVarsProvider } from "@mui/material";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

function App() {
  const theme = extendTheme(themeSettings());
  //
  // const [theme, colorMode] = useMode();
  return (
    <Experimental_CssVarsProvider theme={theme} defaultMode={"dark"}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          {/*<TopBar />*/}
          {/*<SideBar />*/}
          <Box>
            <DarkModeOutlinedIcon />
          </Box>
          {/*<Routes>*/}
          {/*  <Route path="/" element={<Dashboard />} />*/}
          {/*</Routes>*/}
        </main>
      </div>
    </Experimental_CssVarsProvider>
  );
}

export default App;
