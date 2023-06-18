import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../utils/api";

export const switchViewType = createAction("SWITCH_VIEW_TYPE");

export const fetchTableData = createAsyncThunk(
  "FETCH_TABLE_DATA",
  async (fre) => {
    const response = await apis.getTableData(fre);
    return response.json();
  }
  // cancel before execution
  // {
  //   condition: (fre, { getState, extra }) => {
  //     return false;
  //   },
  // }
);

export const fetchChartData = createAsyncThunk(
  "FETCH_CHART_DATA",
  async (fre) => {
    const response = await apis.getChartData(fre);
    return response.json();
  }
);
