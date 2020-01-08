//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react";
import fiveHorizontal from "../../../Battleship-image/ships/5Horizontal.PNG";
import fiveVertical from "../../../Battleship-image/ships/5Vertical.PNG";

class Carrier extends React.Component {
  state = {
    name: "Carrier",
    length: 5,
    orientation: "horizontal",
    gridLocations: [[], [], [], [], []],
    imageHorizontal: fiveHorizontal,
    imageVertical: fiveVertical
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

export default Carrier;
