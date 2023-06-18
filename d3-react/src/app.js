import "./css/practice.css";

import React from "react";
import { createRoot } from "react-dom/client";
import IndexView from "./js/containers/MainView";

const App = () => {
  return <IndexView />;
};

const root = createRoot(document.querySelector("#app-container"));
root.render(<App />);
