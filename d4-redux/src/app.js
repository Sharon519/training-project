import "./css/practice.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./js/store/configStore";
import IndexView from "./js/containers/MainView";

const App = () => {
  return (
    <Provider store={store}>
      <IndexView />
    </Provider>
  );
};

const root = createRoot(document.querySelector("#app-container"));
root.render(<App />);
