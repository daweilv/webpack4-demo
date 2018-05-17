import React from "react";
import { render } from "react-dom";
import "./index.less";
import { formatText } from "@/helper/index";

const Home = () => {
  return <div className="home">{formatText("Home entry")}</div>;
};

render(<Home />, document.getElementById("app"));
