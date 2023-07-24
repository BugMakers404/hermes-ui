import { ResponsiveRadialBar } from "@nivo/radial-bar";

const MyResponsiveRadialBar = () => {
  const data = [
    {
      id: "Supermarket",
      data: [
        {
          x: "Vegetables",
          y: 167,
        },
        {
          x: "Fruits",
          y: 112,
        },
        {
          x: "Meat",
          y: 37,
        },
        {
          x: "Fish",
          y: 236,
        },
      ],
    },
  ];
  return (
    <ResponsiveRadialBar
      data={data}
      valueFormat=">-.2f"
      padding={0.4}
      cornerRadius={2}
      margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: 10,
          translateY: 0,
          itemsSpacing: 6,
          itemDirection: "left-to-right",
          itemWidth: 8,
          itemHeight: 18,
          itemTextColor: "#999",
          symbolSize: 18,
          symbolShape: "square",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default MyResponsiveRadialBar;
