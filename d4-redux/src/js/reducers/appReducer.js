import { createReducer } from "@reduxjs/toolkit";

import { switchViewType } from "../actions";

const initialState = {
  showLoading: false,
  viewType: "traditional",
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchViewType, (state, action) => {
      state.viewType = action.payload;
    })
    .addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state, action) => {
        state.showLoading = true;
      }
    )
    .addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        state.showLoading = false;
      }
    )
    .addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.showLoading = false;
        //some other behaviours
      }
    );
});

export default appReducer;
