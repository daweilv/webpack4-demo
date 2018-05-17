import React from "react";
import { render } from "react-dom";
import "./index.less";
import { formatText } from "@/helper/index";

const Detail = () => {
  return <div className="detail">{formatText("Detail entry")}</div>;
};

render(<Detail />, document.getElementById("app"));
