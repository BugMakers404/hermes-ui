import Dashboard from "./scenes/dashboard/Dashboard.tsx";
import SideBar from "./scenes/global/SideBar.tsx";
import TopBar from "./scenes/global/TopBar.tsx";
import { themeSettings } from "./theme/CustomizedTheme.ts";
import { CssBaseline, Experimental_CssVarsProvider } from "@mui/material";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

function App() {
  const theme = extendTheme(themeSettings());
  //
  // const [theme, colorMode] = useMode();
  return (
    <Experimental_CssVarsProvider theme={theme} defaultMode={"dark"}>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content">
          <TopBar />
          <Dashboard />
          {/*<Routes>*/}
          {/*  <Route path="/" element={<Dashboard />} />*/}
          {/*</Routes>*/}
        </main>
      </div>
    </Experimental_CssVarsProvider>
  );
}

export default App;
