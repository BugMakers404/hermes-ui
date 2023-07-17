import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
);
