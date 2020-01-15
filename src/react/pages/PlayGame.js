//this page is where the game is played, once the setup is complete

import React from "react";
import { Menu } from "../components";
import "./PlayGame.css";
import {
  OpponentBoard,
  PlayerBoard,
  SurrenderButton,
  FireButton,
  TurnHandler
} from "../components/playGame";
import { connect } from "../HOCs";
import board from "../components/setUpBoard/whereDoTheShipsLive";
import { startBoard, getOldMessages } from "../../redux/index";

class PlayGame extends React.Component {
  state = {
    hitAddress: [],
    missAddress: []
  };

  componentDidMount = () => {
    this.findOpponentShipCoordinates();
  };

  findOpponentShipCoordinates = () => {
    let opponentName = this.determineOpponent();
    this.props
      .getOldMessages(opponentName)
      .then(result => {
        result.payload.messages.map(message => {
          if (
            !message.text.includes("ready") &&
            !message.text.includes("torpedo") &&
            !message.text.includes("start") &&
            message.text.includes(this.props.gameNumber)
          ) {
            let splitMessage = message.text.split(" ");
            let messageCoordinate = splitMessage[3];
            let messageShipName = splitMessage[2];
            board[opponentName][messageCoordinate].ship = messageShipName;
          }
        });
      })
      .then(this.props.startBoard(board));
  };

  determineOpponent = () => {
    if (this.props.playerName === "playerA") {
      return "playerB";
    } else return "playerA";
  };

  returnDecision = (msg, address) => {
    if (msg === "Hit") {
      this.setState({
        hitAddress: this.state.hitAddress.concat(address)
      });
    } else {
      this.setState({
        missAddress: this.state.missAddress.concat(address)
      });
    }
  };

  render() {
    console.log("this.state", this.state);
    return (
      <React.Fragment>
        <Menu />
        <TurnHandler />
        <div className="twoBoards">
          <PlayerBoard />
          <OpponentBoard
            hitAddress={this.state.hitAddress}
            missAddress={this.state.missAddress}
          />
        </div>
        <SurrenderButton />
        <FireButton returnDecision={this.returnDecision} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    playerName: state.welcome.startGame.result
      ? state.welcome.startGame.result.message.username
      : null,
    gameNumber: state.welcome.startGame.result
      ? state.welcome.startGame.result.message.text.slice(5, 9)
      : null,
    reduxLayerBoard: state.manipulateBoards.startBoard.result
  };
};
const mapDispatchToProps = {
  getOldMessages,
  startBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);
