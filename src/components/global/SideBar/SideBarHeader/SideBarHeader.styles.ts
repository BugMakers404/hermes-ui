import { styled } from "@mui/material/styles";

const StyledSideBarHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default StyledSideBarHeader;
