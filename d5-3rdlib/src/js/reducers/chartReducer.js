import { createReducer } from "@reduxjs/toolkit";

import { fetchChartData } from "../actions";

const initialState = {
  chartData: {},
};

const chartReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchChartData.fulfilled, (state, action) => {
    const xValues = Object.keys(action.payload);
    const seriesDef = [
      { name: "Buy", type: "column", key: "buy" },
      {
        name: "Sell",
        type: "column",
        key: "sell",
        color: "rgba(0, 176, 185, 0.7)",
        borderColor: "rgba(0, 176, 185, 0.7)",
      },
      {
        name: "Cumulative Net",
        type: "line",
        key: "cumulativeNet",
        color: "#ED8B00",
      },
    ];
    state.chartData = seriesDef.map(({ name, type, key, ...rest }) => {
      return {
        type,
        name,
        data: xValues.map((x) => ({
          x: new Date(x).getTime(),
          y: action.payload[x][key],
        })),
        ...rest,
      };
    });
  });
});

export default chartReducer;
