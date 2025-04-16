import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("@/components/ui/Charts/ApexChart"), {
  ssr: false,
});

const PolarAreaChart = () => {
  const [state, setState] = React.useState({
    series: [14, 23, 21, 17],
    options: {
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <ApexChart
      options={state.options}
      series={state.series}
      type="polarArea"
      height={300}
    />
  );
};

export default PolarAreaChart;
