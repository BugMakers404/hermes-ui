import StyledSideBarFoot from "./SideBarFoot.styles.ts";
import LastPageOutlinedIcon from "@mui/icons-material/LastPageOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { IconButton } from "@mui/material";

type SideBarFootType = {
  open: boolean;
  handleOpenAndClose: () => void;
};

const SideBarFoot = ({ open, handleOpenAndClose }: SideBarFootType) => {
  return (
    <StyledSideBarFoot open={open}>
      <IconButton onClick={handleOpenAndClose}>
        {open ? <MenuOpenOutlinedIcon /> : <LastPageOutlinedIcon />}
      </IconButton>
    </StyledSideBarFoot>
  );
};

export default SideBarFoot;
