//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react";

class Carrier extends React.Component {
  state = {
    name: "Carrier",
    length: 5,
    orientation: "horizontal",
    gridLocations: [[], [], [], [], []],
    imageHorizontal: "../../../Battleship-image/ships/5Horizontal.PNG",
    imageVertical: "../../../Battleship-image/ships/5Vertical.PNG"
  };

  rotateShip = () => {};

  determineGridLocations = () => {};

  selectShipImage = () => {};

  render() {
    return (
      <div>
        <img height="25px" src={ require( "../../../Battleship-image/ships/5Horizontal.PNG") } />   
            {/* the line below should work but instead error: Module NotFound */} 
            {/*<img height="25px" src={ require( `${ this.state.imageHorizontal }`) } />       */}
      </div>
    );
  }
}

export default Carrier;
