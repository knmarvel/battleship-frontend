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

  shipsAvailable = [];
  sillyShips = [];

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
  //   this.shipsAvailable = this.state.ships.map(ship => {
  //     console.log(ship);
  //     return (
  //       <div className={"horizontal" + ship.name}>
  //         <img
  //           src="/src/Battleship-image/ships/4Horizontal.PNG"
  //           className={"initialShip" + ship.length.toString()}
  //           alt={ship.name}
  //         />
  //       </div>
  //     );
  //   });
  //   //map over "ships" to return an image for each ship
  //   //give a click handler to each image
  //   console.log(this.shipsAvailable);
  //   return this.shipsAvailable;
  // };

  render() {
    // this.sillyShips = this.drawShips();
    return (
      <React.Fragment>
        Ships Available
        <div className="shipsAvailable">
          {this.state.battleship && <Battleship />}
          {this.state.carrier && <Carrier />}
          {this.state.cruiser && <Cruiser />}
          {this.state.destroyer && <Destroyer />}
          {this.state.submarine && <Submarine />}
        </div>
        {/* {this.sillyShips}
        {this.shipsAvailable} */}
      </React.Fragment>
    );
  }
}

// export default ShipsAvailable;

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
