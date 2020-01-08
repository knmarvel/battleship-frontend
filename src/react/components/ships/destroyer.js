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
    imageVertical: twoVertical,
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
              height={((getComputedStyle(document.documentElement).getPropertyValue('--shipSquare'))*(Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0)
                ))/100}
              width={this.state.length*((getComputedStyle(document.documentElement).getPropertyValue('--shipSquare'))*(Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0)
                ))/100}
            />
          </div>
        ) : (
          <div className="verticalBattleship">
            <img
              alt={`ship with ${this.state.length} possible hits}`}
              src={this.state.imageVertical}
              height={this.state.length*((getComputedStyle(document.documentElement).getPropertyValue('--shipSquare'))*(Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0)
                ))/100}
              width={((getComputedStyle(document.documentElement).getPropertyValue('--shipSquare'))*(Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0)
                ))/100}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Destroyer;
