// these "ship" components are for use in the setup board page for
//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react";

class Cruiser extends React.Component {
  state = {
    name: "Cruiser",
    length: 3,
    orientation: "horizontal",
    gridLocations: [[], [], []],
    imageHorizontal: "../../../Battleship-image/ships/3Horizontal.PNG",
    imageVertical: "../../../Battleship-image/ships/3Vertical.PNG"
  };

  rotateShip = () => {};

  determineGridLocations = () => {};

  selectShipImage = () => {};

  render() {
    return (
      <div>
        <img height="25px" src={ require( "../../../Battleship-image/ships/3Horizontal.PNG") } />   
            {/* the line below should work but instead error: Module NotFound */} 
            {/*<img height="25px" src={ require( `${ this.state.imageHorizontal }`) } />       */}
      </div>
    );
  }
}

export default Cruiser;
