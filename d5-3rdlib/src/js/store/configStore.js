import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "../reducers";

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
