//ToDo: it needs to inform the player of the game number
//so that their partner can load the game.

import React from "react";
import { withAsyncAction } from "../../HOCs";
import { connect } from "react-redux";
import { Redirect } from "..";
import { WaitScreen } from "../waitScreen/";
import {
  checkReadyStart,
  getOldMessages,
  deleteMessage,
  startGame
} from "../../../redux/actionCreators";
import "./CreateGameButton.css";

class CreateGameButton extends React.Component {
  state = {
    goToSetup: false,
    gameCreated: false,
    message: "",
    gameNumber: "0",
    hasPostedStart: false
  };

  componentDidMount() {
    this.checkReadyStart();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    const gameNumber = this.generateGameNumber();
    this.props.login({ username: "playerA", password: "playerA" });

    this.setState({
      gameNumber: gameNumber,
      gameCreated: true,
      message: this.generateMessage(gameNumber)
    });
    this.interval = setInterval(this.checkReadyStart, 5000);
  };

  deleteOldMessages = () => {
    this.props.getOldMessages("playerA").then(result => {
      result.payload.messages.map(message =>
        this.props.deleteMessage(message.id)
      );
    });
  };

  checkReadyStart = () => {
    if (this.props.token) {
      if (this.state.hasPostedStart === false) {
        if (this.state.gameNumber !== 0) {
          this.props.startGame(this.state.gameNumber, this.props.token);
          this.setState({ hasPostedStart: true });
          console.log("i started " + this.state.gameNumber);
        }
      }
    }

    this.props.checkReadyStart().then(result => {
      result.payload.messages.map(message => {
        if (this.state.gameNumber != 0) {
          console.log(
            "game number in creategamebutton is " + this.state.gameNumber
          );
          if (message.text === "Game " + this.state.gameNumber + " start") {
            if (message.username === "playerB") {
              return this.setState({ goToSetup: true });
            }

            //       numberOfMatches++;
            //     }
            //     if (numberOfMatches === 2) {
            //       clearInterval(this.interval);
            //       return this.setState({ goToSetup: true });
            //     } else return false;
            //   });
          }
        }
      });
    });
  };

  generateLoginData = () => {
    return { username: "playerA", password: "playerA" };
  };

  generateGameNumber = () => {
    let gameNumber = "";
    for (let i = 1; i <= 4; i++) {
      let digit = Math.floor(Math.random() * 10);
      gameNumber = gameNumber + digit;
    }
    return gameNumber;
  };

  generateMessage = gameNumber => {
    return (
      "Waiting for your opponent to join.  Please let them know that your game number is " +
      gameNumber
    );
  };

  render() {
    if (this.state.goToSetup === true) {
      return <Redirect to="/setup" />;
    }
    return (
      <React.Fragment>
        {this.state.gameCreated && <WaitScreen message={this.state.message} />}
        <button id="createNewGame" onClick={this.handleClick}>
          Create New Game
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login.result) {
    return {
      token: state.auth.login.result.token
    };
  } else return {};
};

const mapDispatchToProps = {
  checkReadyStart,
  deleteMessage,
  getOldMessages,
  startGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("auth", "login")(CreateGameButton));
