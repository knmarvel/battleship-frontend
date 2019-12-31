//this button is for the player to resign the game.  it displays on the playGame page.

import React from "react";

class SurrenderButton extends React.Component {
  handleClick = e => {
    //pop up confirmation
    //if confirmed, send You Lose message
    //if confirmed, post to messageFeed "Game 1234 surrender"
  };

  render() {
    return <button onClick={this.handleClick}>I Give Up!</button>;
  }
}

export default SurrenderButton;
