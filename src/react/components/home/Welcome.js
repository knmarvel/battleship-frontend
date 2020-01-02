//this is the main welcome screen, where the player can either start or join a game
import React from "react";

import { CreateGameButton, JoinGameButton } from ".";

class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Battleship!</h1>

        <h2>What is your name, Admiral?</h2>
        <CreateGameButton />
        <h3>Joining a game? Enter the game number below</h3>
        <JoinGameButton />
      </React.Fragment>
    );
  }
}

export default Welcome;
