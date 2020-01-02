//input form on the welcome page that allows the user to join a game in progress
//see "create game button" for template
//should be a form that inputs the game number, and then
//dispatches login for playerB and the game number

import React from "react";

class JoinGameButton extends React.Component {
  handlClick = () => {
    return;
  };
  render() {
    return <button onClick={this.handleClick}> Join Game</button>;
  }
}

export default JoinGameButton;
