//this button shows up on the main setup board page, next to the
//ClearBoard button, and is used to confirm and post the board
//during initial setup.
//suggest you use "mapStateToProps" to get the locations
//and "connect" along with "withAsyncAction" when exporting

import React from "react";
import { connect, withAsyncAction } from "../../HOCs";
import { Redirect } from "../index";
import { checkReadyPlay } from "../../../redux/index";

class ReadyButton extends React.Component {
  state = {
    redirect: false
  };

  tick() {
    // start timer after button is clicked
    this.interval = setInterval(() => {
      this.props.checkReadyPlay();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    console.log("ReadyButton was clicked.");
    this.verifyAllShipsPlaced();
  };

  verifyAllShipsPlaced = () => {
    const ships = [
      this.props.battleship,
      this.props.carrier,
      this.props.cruiser,
      this.props.destroyer,
      this.props.submarine
    ];
    if (ships.includes(null)) {
      alert("Please place all your ships on the board!");
    } else {
      this.postMessagesOfBattleShipLocation();
      this.postMessagesOfCarrierLocation();
      this.postMessagesOfCruiserLocation();
      this.postMessagesOfDestroyerLocation();
      this.postMessagesOfSubmarineLocation();
      this.setRedirect();
    }
    this.redirectToPlayGame();
  };
  postMessagesOfBattleShipLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const battleshipCoordinates = this.props.battleship.coordinates;
    battleshipCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `battleship ${coordinate}` });
    });
  };
  postMessagesOfCarrierLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const carrierCoordinates = this.props.carrier.coordinates;
    carrierCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `carrier ${coordinate}` });
    });
  };
  postMessagesOfCruiserLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const cruiserCoordinates = this.props.cruiser.coordinates;
    cruiserCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `cruiser ${coordinate}` });
    });
  };
  postMessagesOfDestroyerLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const destroyerCoordinates = this.props.destroyer.coordinates;
    destroyerCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `destroyer ${coordinate}` });
    });
  };
  postMessagesOfSubmarineLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const submarineCoordinates = this.props.submarine.coordinates;
    submarineCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `submarine ${coordinate}` });
    });
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  redirectToPlayGame = () => {
    if (this.state.redirect === true) {
      return <Redirect to="/play" />;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.redirectToPlayGame()}
        <button onClick={this.handleClick}>Ready!</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    battleship: state.setUpGame.placeBattleship.result,
    carrier: state.setUpGame.placeCarrier.result,
    cruiser: state.setUpGame.placeCruiser.result,
    destroyer: state.setUpGame.placeDestroyer.result,
    submarine: state.setUpGame.placeSubmarine.result
    // gameNumber: state.auth.getGameNumber.result
  };
};
const mapDispatchToProps = { checkReadyPlay };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "postCoordinatesMessage")(ReadyButton));
