//this is part of the setUp board, and should be to the side of the
//initial board.  it should vertically display horizontal pictures of
//all 5 ships initially.
//when a ship has been placed, that ship should no longer be visible.

import React from "react";
import { Battleship, Carrier, Cruiser, Destroyer, Submarine } from "../ships";
import { connect, withAsyncAction } from "../../HOCs";
import { selectShip } from "../../../redux/index";

class ShipsAvailable extends React.Component {
  renderShip = () => {
    if (this.props.isShipSelected === null) {
      return (
        <div className="shipsAvailable">
          <Battleship />
          <Carrier />
          <Cruiser />
          <Destroyer />
          <Submarine />
        </div>
      );
    }
    switch (this.props.isShipSelected.name) {
      case "battleship":
        return (
          <div className="shipsAvailable">
            <Carrier />
            <Cruiser />
            <Destroyer />
            <Submarine />
          </div>
        );
      case "carrier":
        return (
          <div className="shipsAvailable">
            <Battleship />
            <Cruiser />
            <Destroyer />
            <Submarine />
          </div>
        );
      case "cruiser":
        return (
          <div className="shipsAvailable">
            <Battleship />
            <Carrier />
            <Destroyer />
            <Submarine />
          </div>
        );
      case "destroyer":
        return (
          <div className="shipsAvailable">
            <Battleship />
            <Carrier />
            <Cruiser />
            <Submarine />
          </div>
        );
      case "submarine":
        return (
          <div className="shipsAvailable">
            <Battleship />
            <Carrier />
            <Cruiser />
            <Destroyer />
          </div>
        );
      default:
        return (
          <div className="shipsAvailable">
            Sorry, something's wrong. Coders, check ShipsAvailable compenent. No
            one should ever see this message, there's an XKCD about this very
            phenomenon.
          </div>
        );
    }
  };
  //===============================
  //janell says:
  //kano - need to find a way to set {hasShipSelected:false} after
  //a ship is placed.  placing happens on the initialBoardGrid page (i think)
  //
  //===============================

  render() {
    return <React.Fragment>{this.renderShip()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    isShipSelected: state.setUpGame.selectShip.result
      ? state.setUpGame.selectShip.result
      : null
  };
};
const mapDispatchToProps = { selectShip };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "selectShip")(ShipsAvailable));
