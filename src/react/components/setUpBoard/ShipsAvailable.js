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
    submarine: true
  };

  onClickBattleship = e => {
    console.log("battleship clicked");
    // this.setState({ battleship: false });
  };

  onClickCarrier = e => {
    console.log("carrier clicked");
    // this.setState({ carrier: false });
  };

  onClickCruiser = e => {
    console.log("cruiser clicked");
    // this.setState({ cruiser: false });
  };

  onClickDestroyer = e => {
    console.log("destroyer clicked");
    // this.setState({ destroyer: false });
  };

  onClickSubmarine = e => {
    console.log("submarine clicked");
    // this.setState({ submarine: false });
  };

  //===============================
  //janell says:
  //Chelsea --  ready for you to add in the modal for the popup.
  //divs as they are currently will send a message to the API that the
  //particular ship was clicked, and will toggle the ship from true to false.
  //so i'm thinking we just need to wrap the modal around the divs?
  //===============================

  render() {
    return (
      <React.Fragment>
        <div className="shipsAvailable">
          Ships Available
          <div onClick={this.onClickBattleship}>
            {this.state.battleship && <Battleship />}
          </div>
          <div onClick={this.onClickCarrier}>
            {this.state.carrier && <Carrier />}
          </div>
          <div onClick={this.onClickCruiser}>
            {this.state.cruiser && <Cruiser />}
          </div>
          <div onClick={this.onClickDestroyer}>
            {this.state.destroyer && <Destroyer />}
          </div>
          <div onClick={this.onClickSubmarine}>
            {this.state.submarine && <Submarine />}
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
