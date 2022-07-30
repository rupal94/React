import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <>
    <App name="Rupal" rollno="108"> i am child {100+2}</App>
  </>,
  document.getElementById("root")
);