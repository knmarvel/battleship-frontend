// these "ship" components are for use in the setup board page for
//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react";

import threeHorizontal from "../../../Battleship-image/ships/3Horizontal.PNG";
import threeVertical from "../../../Battleship-image/ships/3Vertical.PNG";

class Cruiser extends React.Component {
  state = {
    name: "Cruiser",
    length: 3,
    orientation: "horizontal",
    gridLocations: [[], [], []],
    imageHorizontal: threeHorizontal,
    imageVertical: threeVertical
  };

  rotateShip = () => {};

  determineGridLocations = () => {};

  selectShipImage = () => {};

  render() {
    return (
      <div>
        <img alt={`ship with ${this.length} possible hits}`} src={ this.state.imageHorizontal } />  
      </div>
    );
  }
}

export default Cruiser;
