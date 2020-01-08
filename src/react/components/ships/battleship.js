//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react";

class Battleship extends React.Component {
  state = {
    name: "Battleship",
    length: 4,
    orientation: "horizontal",
    gridLocations: [[], [], [], []],
    imageHorizontal: "../../../Battleship-image/ships/4Horizontal",
    imageVertical: "../../../Battleship-image/ships/4Vertical"
  };

  rotateShip = () => {};

  determineGridLocations = () => {};

  selectShipImage = () => {};
  //===========================================
  //stopping point: trying to render the ships by showing a div with the img as the
  //background because i couldn't get them to render an image
  //======================================================

  render() {
    return (
      <div>
        {this.state.orientation === "horizontal" ? (
          <div className="horizontalBattleship">
            Image of Horizontal Battleship
          </div>
        ) : (
          <div className="verticalBattleship" />
        )}

        {/* <>image of horizontal or vertical battleship</> */}
      </div>
    );
  }
}

export default Battleship;
