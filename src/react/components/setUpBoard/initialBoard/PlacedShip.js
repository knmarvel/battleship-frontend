import React from "react";

export default function PlacedShip(props) {
  return (
    <button
      className="placedShip"
      key={props.value}
    >
      {props.value}
    </button>
  );
}