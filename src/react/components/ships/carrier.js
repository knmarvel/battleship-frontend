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
    imageHorizontal: "../../../Battleship-image/ships/5Horizontal",
    imageVertical: "../../../Battleship-image/ships/5Vertical"
  };

  rotateShip = () => {};

  determineGridLocations = () => {};

  selectShipImage = () => {};

  render() {
    return (
      <div>
        <>image of horizontal or vertical carrier</>
      </div>
    );
  }
}

export default Carrier;
