import { tokens } from "../theme/CustomizedTheme.ts";
import { Box, Typography, useTheme } from "@mui/material";

type HeaderAttribute = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderAttribute) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
