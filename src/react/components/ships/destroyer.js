//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react";
import twoHorizontal from "../../../Battleship-image/ships/2Horizontal.PNG";
import twoVertical from "../../../Battleship-image/ships/2Vertical.PNG";

class Destroyer extends React.Component {
  state = {
    name: "Destroyer",
    length: 2,
    orientation: "horizontal",
    gridLocations: [[], []],
    imageHorizontal: twoHorizontal,
    imageVertical: twoVertical
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

export default Destroyer;
