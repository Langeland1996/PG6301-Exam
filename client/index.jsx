import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./application";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Application />
  </React.StrictMode>,
  document.getElementById("app")
);
