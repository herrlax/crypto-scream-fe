import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { setup as setupGoober } from "goober";
import "./index.css";
import Providers from "./components/Providers";

setupGoober(React.createElement);

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
