import BarChart from "../../components/BarChart.tsx";
import { Box, Grid, Paper, styled, useTheme } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width:
}));

const Dashboard = () => {
  const theme = useTheme();
  const data = [
    {
      country: "AD",
      "hot dog": 198,
      "hot dogColor": "hsl(27, 70%, 50%)",
      burger: 51,
      burgerColor: "hsl(165, 70%, 50%)",
      sandwich: 163,
      sandwichColor: "hsl(218, 70%, 50%)",
      kebab: 72,
      kebabColor: "hsl(275, 70%, 50%)",
      fries: 170,
      friesColor: "hsl(89, 70%, 50%)",
      donut: 196,
      donutColor: "hsl(66, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 4,
      "hot dogColor": "hsl(239, 70%, 50%)",
      burger: 146,
      burgerColor: "hsl(282, 70%, 50%)",
      sandwich: 75,
      sandwichColor: "hsl(281, 70%, 50%)",
      kebab: 114,
      kebabColor: "hsl(132, 70%, 50%)",
      fries: 179,
      friesColor: "hsl(37, 70%, 50%)",
      donut: 37,
      donutColor: "hsl(347, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 62,
      "hot dogColor": "hsl(270, 70%, 50%)",
      burger: 59,
      burgerColor: "hsl(319, 70%, 50%)",
      sandwich: 55,
      sandwichColor: "hsl(216, 70%, 50%)",
      kebab: 117,
      kebabColor: "hsl(346, 70%, 50%)",
      fries: 92,
      friesColor: "hsl(40, 70%, 50%)",
      donut: 101,
      donutColor: "hsl(280, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 21,
      "hot dogColor": "hsl(147, 70%, 50%)",
      burger: 87,
      burgerColor: "hsl(71, 70%, 50%)",
      sandwich: 156,
      sandwichColor: "hsl(323, 70%, 50%)",
      kebab: 114,
      kebabColor: "hsl(305, 70%, 50%)",
      fries: 48,
      friesColor: "hsl(263, 70%, 50%)",
      donut: 119,
      donutColor: "hsl(252, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 128,
      "hot dogColor": "hsl(94, 70%, 50%)",
      burger: 183,
      burgerColor: "hsl(96, 70%, 50%)",
      sandwich: 39,
      sandwichColor: "hsl(292, 70%, 50%)",
      kebab: 33,
      kebabColor: "hsl(266, 70%, 50%)",
      fries: 67,
      friesColor: "hsl(87, 70%, 50%)",
      donut: 43,
      donutColor: "hsl(53, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 34,
      "hot dogColor": "hsl(48, 70%, 50%)",
      burger: 36,
      burgerColor: "hsl(77, 70%, 50%)",
      sandwich: 84,
      sandwichColor: "hsl(43, 70%, 50%)",
      kebab: 73,
      kebabColor: "hsl(1, 70%, 50%)",
      fries: 196,
      friesColor: "hsl(42, 70%, 50%)",
      donut: 120,
      donutColor: "hsl(221, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 96,
      "hot dogColor": "hsl(219, 70%, 50%)",
      burger: 90,
      burgerColor: "hsl(134, 70%, 50%)",
      sandwich: 129,
      sandwichColor: "hsl(336, 70%, 50%)",
      kebab: 174,
      kebabColor: "hsl(181, 70%, 50%)",
      fries: 133,
      friesColor: "hsl(4, 70%, 50%)",
      donut: 104,
      donutColor: "hsl(263, 70%, 50%)",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4} height="50vh">
          <BarChart data={data} />
        </Grid>
        <Grid item xs={4} height="50vh">
          <BarChart data={data} />
        </Grid>
        <Grid item xs={4} height="50vh">
          <BarChart data={data} />
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
