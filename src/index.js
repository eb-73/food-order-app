import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextCom } from "./component/Component-wide/Context";

ReactDOM.render(
  <ContextCom>
    <App />
  </ContextCom>,
  document.getElementById("root")
);
