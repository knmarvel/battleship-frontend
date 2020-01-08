import React from "react";

export default function InitialBoardSquare(props) {
  return (
    <button
      className="newBoardSquare"
      onClick={props.onClick}
      key={props.value}
    >
      {props.value}
    </button>
  );
}
