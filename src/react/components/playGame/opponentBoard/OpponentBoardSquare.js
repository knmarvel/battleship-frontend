import React from "react";

export default function OpponentBoardSquare(props) {
  let nameOfClass = "newBoardSquare";
  if (props.isShip) {
    nameOfClass += " placedShip";
  }
    if(props.value.length === 1 || props.value <= 10){
    nameOfClass = "headerSquare"
  }

  return (
    <button
      className={
        props.image !== undefined
          ? props.image === "Hit"
            ? "hitBoardSquare"
            : "missBoardSquare"
          : nameOfClass
      }
      onClick={props.onClick}
      key={props.value}
    >
      {props.value}
    </button>
  );
}
