//this is part of the setUp board, and should be to the side of the
//initial board.  it should vertically display horizontal pictures of
//all 5 ships initially.
//when a ship has been placed, that ship should no longer be visible.

import React from "react";
import { Battleship, Carrier, Cruiser, Destroyer, Submarine } from "../ships";
import { connect, withAsyncAction } from "../../HOCs";

class ShipsAvailable extends React.Component {
  state = {
    battleship: true,
    carrier: true,
    cruiser: true,
    destroyer: true,
    submarine: true,
    hasShipSelected: false
  };

  onClickBattleship = e => {
    console.log("battleship clicked");
    this.setState({ battleship: false, hasShipSelected: true });
  };

  onClickCarrier = e => {
    console.log("carrier clicked");
    this.setState({ carrier: false, hasShipSelected: true });
  };

  onClickCruiser = e => {
    console.log("cruiser clicked");
    this.setState({ cruiser: false, hasShipSelected: true });
  };

  onClickDestroyer = e => {
    console.log("destroyer clicked");
    this.setState({ destroyer: false, hasShipSelected: true });
  };

  onClickSubmarine = e => {
    console.log("submarine clicked");
    this.setState({ submarine: false, hasShipSelected: true });
  };

  //===============================
  //janell says:
  //kano - need to find a way to set {hasShipSelected:false} after
  //a ship is placed.  placing happens on the initialBoardGrid page (i think)
  //
  //===============================

  render() {
    return (
      <React.Fragment>
        <div className="shipsAvailable">
          Ships Available
          <div>
            {this.state.battleship && (
              <React.Fragment>
                <Battleship />
                {!this.state.hasShipSelected && (
                  <button onClick={this.onClickBattleship}>Select Ship</button>
                )}
              </React.Fragment>
            )}
          </div>
          <div>
            {this.state.carrier && (
              <React.Fragment>
                <Carrier />
                {!this.state.hasShipSelected && (
                  <button onClick={this.onClickCarrier}>Select Ship</button>
                )}
              </React.Fragment>
            )}
          </div>
          <div onClick={this.onClickCruiser}>
            {this.state.cruiser && (
              <React.Fragment>
                <Cruiser />
                {!this.state.hasShipSelected && (
                  <button onClick={this.onClickCruiser}>Select Ship</button>
                )}
              </React.Fragment>
            )}
          </div>
          <div onClick={this.onClickDestroyer}>
            {this.state.destroyer && (
              <React.Fragment>
                <Destroyer />
                {!this.state.hasShipSelected && (
                  <button onClick={this.onClickDestroyer}>Select Ship</button>
                )}
              </React.Fragment>
            )}
          </div>
          <div onClick={this.onClickSubmarine}>
            {this.state.submarine && (
              <React.Fragment>
                <Submarine />
                {!this.state.hasShipSelected && (
                  <button onClick={this.onClickSubmarine}>Select Ship</button>
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "selectShip")(ShipsAvailable));
