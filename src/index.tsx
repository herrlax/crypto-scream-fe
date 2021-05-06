import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { setup as setupGoober } from "goober";
import "./index.css";

setupGoober(React.createElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
