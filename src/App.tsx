import SideBar from "./components/global/SideBar/SideBar.component.tsx";
import TopBar from "./components/global/TopBar/TopBar.component.tsx";
import { themeSettings } from "./theme/CustomizedTheme.ts";
import { Box, CssBaseline, Experimental_CssVarsProvider, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { experimental_extendTheme as extendTheme, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
            <Grid container spacing={2}>
              <Grid xs={8}>
                <Item>xs=8</Item>
              </Grid>
              <Grid xs={4}>
                <Item>xs=4</Item>
              </Grid>
              <Grid xs={4}>
                <Item>xs=4</Item>
              </Grid>
              <Grid xs={8}>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </Experimental_CssVarsProvider>
  );
}

export default App;
