import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="120px"
        gap="20px 10px"
      >
        <Box gridColumn="span 3" display="flex" alignItems="center" bgcolor="red"></Box>
        <Box gridColumn="span 3" display="flex" alignItems="center" bgcolor="red"></Box>
        <Box gridColumn="span 3" display="flex" alignItems="center" bgcolor="red"></Box>
        <Box gridColumn="span 3" display="flex" alignItems="center" bgcolor="red"></Box>
        <Box gridColumn="span 3" display="flex" alignItems="center" bgcolor="red"></Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} margin={0}>
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
    </Box>
  );
};

export default Dashboard;
