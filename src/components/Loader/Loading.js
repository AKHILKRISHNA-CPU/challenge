import React from "react";
import spinner from "../../load.gif";
import "./Loading.css";
const Loading = () => (
  <div className="loading">
    <img src={spinner} alt="loading" />
  </div>
);

export default Loading;
