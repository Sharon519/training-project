import "antd/dist/reset.css";
import "./css/practice.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from "antd";

import store from "./js/store/configStore";
import IndexView from "./js/containers/MainView";

const App = () => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Provider store={store}>
        <IndexView />
      </Provider>
    </ConfigProvider>
  );
};

const root = createRoot(document.querySelector("#app-container"));
root.render(<App />);
