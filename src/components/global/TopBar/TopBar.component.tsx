import ModeToggleButton from "./ModeToggleButton.tsx";
import StyledTopBar from "./TopBar.styles.ts";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, IconButton, InputBase, alpha, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const TopBar = () => {
  return (
    <StyledTopBar position="relative" elevation={0} enableColorOnDark={true}>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchOutlinedIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <ModeToggleButton />

          <IconButton size="small" aria-label="show 4 new mails" color="inherit">
            <EmailRoundedIcon />
          </IconButton>
          <IconButton size="small" aria-label="show 17 new notifications" color="inherit">
            <NotificationsRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </StyledTopBar>
  );
};

export default TopBar;
