import React from "react";
import battleshipHorizontal from "../../../Battleship-image/ships/horizShip4.png";
import battleshipVertical from "../../../Battleship-image/ships/vertShip4.png";
import { connect } from "../../HOCs";
import { selectShip } from "../../../redux/index";

class Battleship extends React.Component {
  state = {
    name: "battleship",
    length: 4,
    orientation: "horizontal",
    imageHorizontal: battleshipHorizontal,
    imageVertical: battleshipVertical
  };

  rotateShip = () => {
    this.state.orientation === "horizontal"
      ? this.setState({ orientation: "vertical" })
      : this.setState({ orientation: "horizontal" });
  };

  onShipClick = () => {
    document.body.style.cursor = "url(./battleshipHorizontalCursor.PNG),help";
    this.props.selectShip({
      name: this.state.name,
      length: this.state.length,
      orientation: this.state.orientation
    });
  };
  render() {
    return (
      <div className="shipGroups">
        {this.state.orientation === "horizontal" ? (
          <div className="">
            <img
              onClick={this.onShipClick}
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
            />
          </div>
        ) : (
          <div className="verticalBattleship">
            <img
              onClick={this.onShipClick}
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
            />
          </div>
        )}
        <div>
          <button onClick={this.rotateShip}>Rotate Ship</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = { selectShip };

export default connect(mapStateToProps, mapDispatchToProps)(Battleship);
