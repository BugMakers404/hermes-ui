import { colorPalette } from "../../theme/theme.colors.ts";
import { Box, useTheme } from "@mui/material";

const ProgressCircle = ({ progress = 0.75, diameter = 40 }) => {
  const theme = useTheme();
  const colors = colorPalette(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${diameter}px`,
        height: `${diameter}px`,
      }}
    ></Box>
  );
};

export default ProgressCircle;
