import React from "react";
import reactDom from "react-dom";
import "./styles/index.scss";

import Home from "./app/components/Home";

reactDom.render(
  <Home/>,
  document.getElementById("app")
);