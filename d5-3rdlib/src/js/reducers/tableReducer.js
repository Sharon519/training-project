import { createReducer } from "@reduxjs/toolkit";

import { fetchTableData } from "../actions";

const initialState = {
  tableData: {},
};

const tableReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchTableData.fulfilled, (state, action) => {
    state.tableData = action.payload;
  });
});

export default tableReducer;
