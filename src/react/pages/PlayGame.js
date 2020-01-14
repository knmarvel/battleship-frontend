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
import board from "../components";
import { startBoard, getOldMessages } from "../../redux/index";

class PlayGame extends React.Component {
  componentDidMount = () => {
    this.findOpponentShipCoordinates();
  };

  findOpponentShipCoordinates = () => {
    let opponentName = this.determineOpponent();
    console.log(opponentName);
    let shipCoordinates = this.props
      .getOldMessages(opponentName)
      .then(console.log(shipCoordinates));
    //   .then(result => {
    //     result.payload.map(message => {
    //       if (!result.payload.includes("ready")) {
    //         let newObject = {};
    //         let splitMessage = message.text.split(" ");
    //         let messageCoordinate = splitMessage[3];
    //         let messageShipName = splitMessage[2];
    //         return (newObject[messageCoordinate] = messageShipName);
    //       }
    //     });
    //   });
    // console.log(shipCoordinates);
  };

  determineOpponent = () => {
    if (this.props.playerName === "playerA") {
      return "playerB";
    } else return "playerA";
  };

  render() {
    return (
      <React.Fragment>
        <Menu />
        <TurnHandler />
        <div className="twoBoards">
          <PlayerBoard />
          <OpponentBoard />
        </div>
        <SurrenderButton />
        <FireButton />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  if (state.welcome.startGame.result) {
    return {
      playerName: state.welcome.startGame.result.username
    };
  } else return {};
};

const mapDispatchToProps = {
  getOldMessages,
  startBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);
