import React from "react";
import { render } from "react-dom";
import "./index.less";

const Hello = () => {
  return <div className="helloClass">Hello World!!</div>;
};

render(<Hello />, document.getElementById("app"));
