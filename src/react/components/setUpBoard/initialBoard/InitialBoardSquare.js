import React from "react";

export default function InitialBoardSquare(props) {
  let nameOfClass = "newBoardSquare"
  if(props.isShip){
    nameOfClass += " placedShip"
  }
  if(props.isHeader){
    nameOfClass += " headerSquare"
  }

  
  return (
    <button
      className= {nameOfClass}
      onClick={props.onClick}
      key={props.value}
    >
      {props.value}
    </button>
  );
}
