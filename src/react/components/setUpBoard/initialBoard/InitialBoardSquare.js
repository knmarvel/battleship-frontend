import React from "react";

export default function InitialBoardSquare(props) {
  let nameOfClass = "newBoardSquare"
  if(props.isShip){
    nameOfClass += " placedShip"
  }
  if(props.value.length === 1 || props.value <= 10){
    nameOfClass = "headerSquare"
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
