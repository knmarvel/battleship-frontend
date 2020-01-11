import React from "react";
import { Battleship, Carrier, Cruiser, Destroyer, Submarine } from "../ships";
import { connect, withAsyncAction } from "../../HOCs";
// import { selectShip } from "../../../redux/index";

class ShipsAvailable extends React.Component {
  renderBattleship = () => {
    if (this.props.isShipSelected === null) {
      if (this.props.placeBattleship === null) {
        return <Battleship />;
      }
    }
    if (this.props.isShipSelected !== "battleship") {
      if (this.props.placeBattleship === null) {
        return <Battleship />;
      }
    }
  };

  renderCarrier = () => {
    if (this.props.isShipSelected === null) {
      if (this.props.placeCarrier === null) {
        return <Carrier />;
      }
    }
    if (this.props.isShipSelected !== "carrier") {
      if (this.props.placeCarrier === null) {
        return <Carrier />;
      }
    }
  };

  renderCruiser = () => {
    if (this.props.isShipSelected === null) {
      if (this.props.placeCruiser === null) {
        return <Cruiser />;
      }
    }
    if (this.props.isShipSelected !== "cruiser") {
      if (this.props.placeCruiser === null) {
        return <Cruiser />;
      }
    }
  };

  renderDestroyer = () => {
    if (this.props.isShipSelected === null) {
      if (this.props.placeDestroyer === null) {
        return <Destroyer />;
      }
    }
    if (this.props.isShipSelected !== "destroyer") {
      if (this.props.placeDestroyer === null) {
        return <Destroyer />;
      }
    }
  };

  renderSubmarine = () => {
    if (this.props.isShipSelected === null) {
      if (this.props.placeSubmarine === null) {
        return <Submarine />;
      }
    }

    if (this.props.isShipSelected !== "submarine") {
      if (this.props.placeSubmarine === null) {
        return <Submarine />;
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="shipsAvailable">
          {this.renderBattleship()}
          {this.renderCarrier()}
          {this.renderCruiser()}
          {this.renderDestroyer()}
          {this.renderSubmarine()}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isShipSelected: state.setUpGame.selectShip.result
      ? state.setUpGame.selectShip.result.name
      : null,
    placeBattleship: state.setUpGame.placeBattleship
      ? state.setUpGame.placeBattleship.result
      : null,
    placeCarrier: state.setUpGame.placeCarrier
      ? state.setUpGame.placeCarrier.result
      : null,
    placeCruiser: state.setUpGame.placeCruiser
      ? state.setUpGame.placeCruiser.result
      : null,
    placeDestroyer: state.setUpGame.placeDestroyer
      ? state.setUpGame.placeDestroyer.result
      : null,
    placeSubmarine: state.setUpGame.placeSubmarine
      ? state.setUpGame.placeSubmarine.result
      : null
  };
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "selectShip")(ShipsAvailable));
