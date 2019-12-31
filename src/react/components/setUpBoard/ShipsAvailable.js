//this is part of the setUp board, and should be to the side of the
//initial board.  it should vertically display horizontal pictures of
//all 5 ships initially.
//when a ship has been placed, that ship should no longer be visible.

import React from "react";

class ShipsAvailable extends React.Component {
  state = {
    ships: ["battleship", "carrier", "cruiser", "destroyer", "submarine"],
    selectedShip: ""
  };

  componentDidMount = () => {
    this.drawShips(this.state.ships);
  };

  componentDidUpdate = () => {
    this.drawShips(this.state.ships);
  };

  handleClick = () => {
    //target event for each individual ship
    //set selectedShip to the target - used for the cursor elsewhere
    //and in the rotation popup
    //remove the selected ship from the array in state of "ships"
    //make the rotation popup visible
  };

  drawShips = ships => {
    //map over "ships" to return an image for each ship
    //give a click handler to each image
  };

  render() {
    return (
      <React.Fragment>
        Ships Available
        {this.drawShips(this.state.ships)}
      </React.Fragment>
    );
  }
}

export default ShipsAvailable;
