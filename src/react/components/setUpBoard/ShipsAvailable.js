import React from "react";
import { Battleship, Carrier, Cruiser, Destroyer, Submarine } from "../ships";
import { connect, withAsyncAction } from "../../HOCs";


class ShipsAvailable extends React.Component {

  renderBattleship = () => {
    if (this.props.nameOfSelectedShip === null) {
      if (this.props.placeBattleship === null) {
        return (
          <div className="availableShip">
            <Battleship />
          </div>
        );
      }
    }
    if (this.props.nameOfSelectedShip !== "battleship") {
      if (this.props.placeBattleship === null) {
        return (
          <div className="availableShip">
            <Battleship />
          </div>
        );
      }
    }
  };

  renderCarrier = () => {
    if (this.props.nameOfSelectedShip === null) {
      if (this.props.placeCarrier === null) {
        return (
          <div className="availableShip">
            <Carrier />
          </div>
        );
      }
    }
    if (this.props.nameOfSelectedShip !== "carrier") {
      if (this.props.placeCarrier === null) {
        return (
          <div className="availableShip">
            <Carrier />
          </div>
        );
      }
    }
  };

  renderCruiser = () => {
    if (this.props.nameOfSelectedShip === null) {
      if (this.props.placeCruiser === null) {
        return (
          <div className="availableShip">
            <Cruiser />
          </div>
        );
      }
    }
    if (this.props.nameOfSelectedShip !== "cruiser") {
      if (this.props.placeCruiser === null) {
        return (
          <div className="availableShip">
            <Cruiser />
          </div>
        );
      }
    }
  };

  renderDestroyer = () => {
    if (this.props.nameOfSelectedShip === null) {
      if (this.props.placeDestroyer === null) {
        return (
          <div className="availableShip">
            <Destroyer />
          </div>
        );
      }
    }
    if (this.props.nameOfSelectedShip !== "destroyer") {
      if (this.props.placeDestroyer === null) {
        return (
          <div className="availableShip">
            <Destroyer />
          </div>
        );
      }
    }
  };

  renderSubmarine = () => {
    if (this.props.nameOfSelectedShip === null) {
      if (this.props.placeSubmarine === null) {
        return (
          <div className="availableShip">
            <Submarine />
          </div>
        );
      }
    }

    if (this.props.nameOfSelectedShip !== "submarine") {
      if (this.props.placeSubmarine === null) {
        return (
          <div className="availableShip">
            <Submarine />
          </div>
        );
      }
    }
  };

  renderShipPlacingInstructions = () => {
    if(
      this.props.placeBattleship === null
      || this.props.placeCarrier === null
      || this.props.placeCruiser === null
      || this.props.placeDestroyer === null
      || this.props.placeSubmarine === null
    ){
      return <div className="shipInstructions">Ship Placing Instructions</div>
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="shipsAvailable">
          {this.renderShipPlacingInstructions()}
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
    nameOfSelectedShip: state.setUpGame.selectShip.result
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
