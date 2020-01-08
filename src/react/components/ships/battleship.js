//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react";
import fourHorizontal from "../../../Battleship-image/ships/4Horizontal.PNG";
import fourVertical from "../../../Battleship-image/ships/4Vertical.PNG";

class Battleship extends React.Component {
  state = {
    name: "Battleship",
    length: 4,
    orientation: "horizontal",
    gridLocations: [[], [], [], []],
    imageHorizontal: fourHorizontal,
    imageVertical: fourVertical
  };

  rotateShip = () => {};

  determineGridLocations = () => {};

  selectShipImage = () => {};
  //===========================================
  //janell says:
  //got the images to display the proper size by computing
  //what vh is with another function (thanks stack overflow!)
  //then hard coded the height and width directly for each picture.
  //i couldn't make it use css variables, so if we decide that
  //"squareSize" should be something other than 6vh,
  //we will need to go in and manually change all 10 different sizes
  //(2 for each ship)
  //======================================================

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
              width={this.vh(24)}
            />
          </div>
        ) : (
          <div className="verticalBattleship">
            <img
              alt={`ship with ${this.state.length} possible hits}`}
              src={this.state.imageVertical}
              height={this.vh(24)}
              width={this.vh(6)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Battleship;
