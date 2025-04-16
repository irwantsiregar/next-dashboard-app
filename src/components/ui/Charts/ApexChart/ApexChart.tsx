import { ReactNode } from "react";
import _ApexCharts from "react-apexcharts";

export type ChartType =
  | "line"
  | "area"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap"
  | undefined;

export type TApexChart = {
  className?: string;
  noData?: Record<string, string | ReactNode>;
  height?: string | number;
  width?: string | number;
  options: Record<string, unknown>;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
  type?: ChartType;
};

const ApexChart = (props: TApexChart) => {
  const { className, options, series, type, height, width } = props;

  return (
    <_ApexCharts
      aria-label="ApexChartLayerFeature"
      className={className}
      options={options}
      series={series}
      type={type}
      height={height}
      width={width}
    />
  );
};

export default ApexChart;
