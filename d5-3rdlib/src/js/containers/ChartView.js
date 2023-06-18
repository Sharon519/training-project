import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAnnotation from "highcharts/modules/annotations";

import { getChartConfig } from "../utils/utils";

HighchartsAnnotation(Highcharts);

const ChartView = () => {
  const chartData = useSelector((state) => state.chartReducer.chartData);
  const [options, setOptions] = useState(getChartConfig());

  useEffect(() => {
    const baseConfig = getChartConfig();
    baseConfig.series = chartData;
    setOptions(baseConfig);
  }, [chartData]);

  return (
    <section className="chart-area">
      <div className="title">Flow Analysis</div>
      <div className="chart-wrapper">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </section>
  );
};

export default ChartView;
