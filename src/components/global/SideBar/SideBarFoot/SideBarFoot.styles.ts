import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type StyledSideBarFootProps = {
  open: boolean;
};

const StyledSideBarFoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<StyledSideBarFootProps>(({ open }) => ({
  display: "flex",
  justifyContent: open ? "flex-end" : "center",
}));

export default StyledSideBarFoot;
