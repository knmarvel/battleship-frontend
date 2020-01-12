//this button shows up on the main setup board page, next to the
//ClearBoard button, and is used to confirm and post the board
//during initial setup.
//suggest you use "mapStateToProps" to get the locations
//and "connect" along with "withAsyncAction" when exporting

import React from "react";
import { connect, withAsyncAction } from "../../HOCs";
import { Redirect } from "../index";
import { fetchLastMessage, postMessage } from "../../../redux/index";
import { WaitScreen } from "../waitScreen";

class ReadyButton extends React.Component {
  state = {
    redirect: false,
    opponentName: "",
    playerReady: false,
    message: "Waiting for your opponent to finish placing ships..."
  };

  componentDidMount = () => {
    this.determineOpponentName();
  };

  determineOpponentName = () => {
    if (this.props.playerName === "playerA") {
      this.setState({ opponentName: "playerB" });
    } else if (this.props.playerName === "playerB") {
      this.setState({ opponentName: "playerA" });
    } else {
      console.log(
        "cannot set opponent name because playername is not playerA or playerB"
      );
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
      return false;
    } else {
      this.postMessagesOfBattleShipLocation();
      this.postMessagesOfCarrierLocation();
      this.postMessagesOfCruiserLocation();
      this.postMessagesOfDestroyerLocation();
      this.postMessagesOfSubmarineLocation();
      return true;
    }
  };
  postMessagesOfBattleShipLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const battleshipCoordinates = this.props.battleship.coordinates;
    //const gameNumber = this.props.gameNumber;
    battleshipCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `battleship ${coordinate}` });
      //postCoordinatesMessage({ text: `${gameNumber} battleship ${coordinate}` });
    });
  };
  postMessagesOfCarrierLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const carrierCoordinates = this.props.carrier.coordinates;
    //const gameNumber = this.props.gameNumber;
    carrierCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `carrier ${coordinate}` });
      //postCoordinatesMessage({ text: `${gameNumber} carrier ${coordinate}` });
    });
  };
  postMessagesOfCruiserLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const cruiserCoordinates = this.props.cruiser.coordinates;
    //const gameNumber = this.props.gameNumber;
    cruiserCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `cruiser ${coordinate}` });
      //postCoordinatesMessage({ text: `${gameNumber} cruiser ${coordinate}` });
    });
  };
  postMessagesOfDestroyerLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const destroyerCoordinates = this.props.destroyer.coordinates;
    //const gameNumber = this.props.gameNumber;
    destroyerCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `destroyer ${coordinate}` });
      //postCoordinatesMessage({ text: `${gameNumber} destroyer ${coordinate}` });
    });
  };
  postMessagesOfSubmarineLocation = () => {
    const postCoordinatesMessage = this.props.postCoordinatesMessage;
    const submarineCoordinates = this.props.submarine.coordinates;
    //const gameNumber = this.props.gameNumber;
    submarineCoordinates.forEach(function(coordinate) {
      postCoordinatesMessage({ text: `submarine ${coordinate}` });
      //postCoordinatesMessage({ text: `${gameNumber} submarine ${coordinate}` });
    });
  };

  startCheckingForOpponentReady = () => {
    this.interval = setInterval(() => {
      console.log("checking opponent readiness");
      this.checkReadyPlay();
    }, 2000);
  };

  checkReadyPlay = () => {
    console.log("checkReadyPlay has been called");
    console.log("opponent name is " + this.state.opponentName);
    console.log("playerName is " + this.props.playerName);
    this.props.fetchLastMessage(this.state.opponentName).then(result => {
      result.payload.messages.map(message => {
        if (!message.text.includes("start")) {
          console.log("player is ready");
          return this.redirectToPlayGame();
        } else return false;
      });
    });
  };

  redirectToPlayGame = () => {
    console.log("redirectiong to /play");
    this.setState({ redirect: true });
  };

  handleClick = () => {
    console.log("ReadyButton was clicked.");
    if (this.verifyAllShipsPlaced() === false) {
      return;
    }
    this.setState({ playerReady: true });
    // this.props.postMessage({ text: `${this.props.gameNumber}` + " ready" });
    this.props.postMessage({ text: " ready" });

    this.startCheckingForOpponentReady();
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/play" />;
    }
    return (
      <React.Fragment>
        {this.state.playerReady && <WaitScreen message={this.state.message} />}
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
    submarine: state.setUpGame.placeSubmarine.result,
    playerName: state.auth.login.result.username
    // gameNumber: state.auth.getGameNumber.result
  };
};
const mapDispatchToProps = { fetchLastMessage, postMessage };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "postCoordinatesMessage")(ReadyButton));
