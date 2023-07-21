import SideBar from "./components/global/SideBar/SideBar.component.tsx";
import TopBar from "./components/global/TopBar/TopBar.component.tsx";
import { themeSettings } from "./theme/CustomizedTheme.ts";
import { CssBaseline, Experimental_CssVarsProvider } from "@mui/material";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

function App() {
  const theme = extendTheme(themeSettings());

  return (
    <Experimental_CssVarsProvider theme={theme} defaultMode={"dark"}>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content">
          <TopBar />
          {/*<Dashboard />*/}
          {/*<Routes>*/}
          {/*  <Route path="/" element={<Dashboard />} />*/}
          {/*</Routes>*/}
        </main>
      </div>
    </Experimental_CssVarsProvider>
  );
}

export default App;
