// set the cursor on hover over the board in CSS to be the correctly oriented
//picture of the ship.  if no ship has been selected yet, cursor
//should be default.  get "selectedShip" from "ShipsAvailable" via
//"mapStateToProps" and "connect"
//
// suggest using "mapStateToProps" and "connect"
//to get relevant props

import React from "react";
import { InitialBoard, ShipsAvailable } from "../components/setUpBoard";
import { Menu } from "../components";
import "./SetUpBoard.css";

class SetUpBoard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <h2>PLACE YOUR SHIPS</h2>
        <div className="setUpBoard">
          <div className="initialBoard">
            <InitialBoard />
          </div>
          <ShipsAvailable />
        </div>
      </React.Fragment>
    );
  }
}

export default SetUpBoard;
