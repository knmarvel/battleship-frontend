import React from "react";
import "./WaitScreen.css";

const WaitScreen = props => {
  return (
    <div className="waitScreen">
      <p className="waitMessage">{props.message}</p>
    </div>
  );
};

export default WaitScreen;
