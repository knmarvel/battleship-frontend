// these "ship" components are for use in the setup board page for
//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react";

import threeHorizontal from "../../../Battleship-image/ships/3Horizontal.PNG";
import threeVertical from "../../../Battleship-image/ships/3Vertical.PNG";
import { connect } from "../../HOCs";
import { selectShip } from "../../../redux/index";

class Cruiser extends React.Component {
  state = {
    name: "Cruiser",
    length: 3,
    orientation: "horizontal",
    imageHorizontal: threeHorizontal,
    imageVertical: threeVertical
  };

  rotateShip = () => {
    this.state.orientation === "horizontal"
      ? this.setState({ orientation: "vertical" })
      : this.setState({ orientation: "horizontal" });
  };

  render() {
    return (
      <div>
        {this.state.orientation === "horizontal" ? (
          <div className="">
            <img
              alt={`ship with ${this.state.length} possible hits}`}
              src={this.state.imageHorizontal}
              height={
                (getComputedStyle(document.documentElement).getPropertyValue(
                  "--shipSquare"
                ) *
                  Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  )) /
                100
              }
              width={
                (this.state.length *
                  (getComputedStyle(document.documentElement).getPropertyValue(
                    "--shipSquare"
                  ) *
                    Math.max(
                      document.documentElement.clientHeight,
                      window.innerHeight || 0
                    ))) /
                100
              }
              onClick={() => {
                this.props.selectShip({
                  text: "selecting horizontal cruiser"
                });
              }}
            />
          </div>
        ) : (
          <div className="verticalBattleship">
            <img
              alt={`ship with ${this.state.length} possible hits}`}
              src={this.state.imageVertical}
              height={
                (this.state.length *
                  (getComputedStyle(document.documentElement).getPropertyValue(
                    "--shipSquare"
                  ) *
                    Math.max(
                      document.documentElement.clientHeight,
                      window.innerHeight || 0
                    ))) /
                100
              }
              width={
                (getComputedStyle(document.documentElement).getPropertyValue(
                  "--shipSquare"
                ) *
                  Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  )) /
                100
              }
              onClick={() => {
                this.props.selectShip({
                  text: "selecting vertical cruiser"
                });
              }}
            />
          </div>
        )}
        <button onClick={this.rotateShip}>Rotate Ship</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = { selectShip };

export default connect(mapStateToProps, mapDispatchToProps)(Cruiser);
