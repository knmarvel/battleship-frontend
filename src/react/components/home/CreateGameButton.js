//this button is used to create a new game.  its is on the welcome screen when
//the player first loads the game.  it needs to inform the player of the game number
//so that their partner can load the game.

import React from "react";
import { withAsyncAction } from "../../HOCs";
import { connect } from "react-redux";

class CreateGameButton extends React.Component {
  handleClick = () => {
    console.log("CreateGameButton clicked");
    //generate four-digit random number (example : 1234)
    const gameNumber = this.generateGameNumber();
    console.log("game number is " + gameNumber);
    //log the player in as playerA
    const loginData = this.generateLoginData();
    console.log("loginData is " + loginData);
    //i'm not sure is we can access "login" with connect this way...
    this.props.login(gameNumber, loginData);
    //post to the player (popup?) what that number is and
    //inform them they need to let their partner know the game number

    //then redirect the screen to the setupBoard page
  };

  generateLoginData = () => {
    return { username: "playerA", password: "playerA" };
  };

  generateGameNumber = () => {
    let gameNumber = 1234;
    return gameNumber;
  };

  render() {
    return <button onClick={this.handleClick}>Create Game</button>;
  }
}

const mapStateToProps = state => {
  return {
    //example  --- selectedShip: state.selectedShip
  };
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("auth", "login")(CreateGameButton));
