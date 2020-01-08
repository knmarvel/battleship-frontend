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

  vh = v => {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  };

  render() {
    return (
      <div>
        {this.state.orientation === "horizontal" ? (
          <div className="horizontalBattleship">
            <img
              alt={`ship with ${this.state.length} possible hits}`}
              src={this.state.imageHorizontal}
              height={this.vh(6)}
              width={this.vh(18)}
            />
          </div>
        ) : (
          <div className="verticalBattleship">
            <img
              alt={`ship with ${this.state.length} possible hits}`}
              src={this.state.imageVertical}
              height={this.vh(18)}
              width={this.vh(6)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Cruiser;
