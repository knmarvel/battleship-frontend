//this is the main welcome screen, where the player can either start or join a game
import React from "react";

import { CreateGameButton, JoinGameForm } from ".";

class Welcome extends React.Component {
  render() {
    return (
      <div className="CreateAndJoin">
        <CreateGameButton />

        <div className="JoinGameForm">
          <JoinGameForm />
        </div>
      </div>
    );
  }
}

export default Welcome;
