//ToDo: it needs to inform the player of the game number
//so that their partner can load the game.

import React from "react";
import { withAsyncAction } from "../../HOCs";
import { connect } from "react-redux";
import { Redirect } from "..";
import { WaitScreen } from "../waitScreen/";
import { checkReady } from "../../../redux/actionCreators";
import "./CreateGameButton.css";

class CreateGameButton extends React.Component {
  state = {
    goToSetup: false,
    gameCreated: false,
    message: "",
    gameNumber: "0"
  };

  componentDidMount() {
    this.checkReady();
    this.interval = setInterval(this.checkReady, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    const gameNumber = this.generateGameNumber();
    const loginData = this.generateLoginData();
    this.props.login(gameNumber, loginData);
    //post to the player (popup?) what that number is and
    //inform them they need to let their partner know the game number

    this.setState({
      gameNumber: gameNumber,
      gameCreated: true,
      message: this.generateMessage(gameNumber)
    });
    this.checkReady();
  };

  checkReady = () => {
    console.log("game number in state is " + this.state.gameNumber);
    let numberOfMatches = 0;
    this.props.checkReady().then(result => {
      result.payload.messages.map(message => {
        if (message.text === "Game " + this.state.gameNumber + " start") {
          numberOfMatches++;
        }
        if (numberOfMatches === 2) {
          clearInterval(this.interval);
          return this.setState({ goToSetup: true });
        } else return false;
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
        <button id="createNewGame" onClick={this.handleClick}>Create New Game</button>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     //example  --- selectedShip: state.selectedShip
//   };
// };

const mapDispatchToProps = { checkReady };
export default connect(
  null,
  mapDispatchToProps
)(withAsyncAction("auth", "login")(CreateGameButton));
