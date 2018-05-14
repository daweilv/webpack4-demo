import React from "react";
import { render } from "react-dom";
import "./index.less";

const Home = () => {
  return <div className="home">Home entry</div>;
};

render(<Home />, document.getElementById("app"));
