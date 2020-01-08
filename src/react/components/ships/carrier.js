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
              width={this.vh(30)}
            />
          </div>
        ) : (
          <div className="verticalBattleship">
            <img
              alt={`ship with ${this.state.length} possible hits}`}
              src={this.state.imageVertical}
              height={this.vh(30)}
              width={this.vh(6)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Carrier;
