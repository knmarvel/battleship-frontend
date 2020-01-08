//this is part of the setUp board, and should be to the side of the
//initial board.  it should vertically display horizontal pictures of
//all 5 ships initially.
//when a ship has been placed, that ship should no longer be visible.

import React from "react";
import { Battleship, Carrier, Cruiser, Destroyer, Submarine } from "../ships";
import { connect, withAsyncAction } from "../../HOCs";

class ShipsAvailable extends React.Component {
  state = {
    battleship: true,
    carrier: true,
    cruiser: true,
    destroyer: true,
    submarine: true,
    shipList: ["battleship", "carrier", "cruiser", "destroyer", "submarine"],
    selectedShip: ""
  };

  // shipsAvailable = [];

  // componentDidMount = () => {
  //   this.drawShips(this.state.ships);
  // };

  // componentDidUpdate = () => {
  //   this.drawShips(this.state.ships);
  // };

  handleClick = () => {
    //target event for each individual ship
    //set selectedShip to the target - used for the cursor elsewhere
    //and in the rotation popup
    //remove the selected ship from the array in state of "ships"
    //make the rotation popup visible
  };

  // drawShips = ships => {

  //   //map over "ships" to return an image for each ship
  //   //give a click handler to each image
  //   console.log(this.shipsAvailable);
  //   return this.shipsAvailable;
  // };

  render() {
    return (
      <React.Fragment>
        <div className="shipsAvailable">
          Ships Available
          {this.state.battleship && <Battleship />}
          {this.state.carrier && <Carrier />}
          {this.state.cruiser && <Cruiser />}
          {this.state.destroyer && <Destroyer />}
          {this.state.submarine && <Submarine />}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedShip: state.selectedShip,
    Battleship: Battleship.props,
    Carrier: Carrier,
    Cruiser: Cruiser,
    Destroyer: Destroyer,
    Submarine: Submarine
  };
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "placeShip")(ShipsAvailable));
