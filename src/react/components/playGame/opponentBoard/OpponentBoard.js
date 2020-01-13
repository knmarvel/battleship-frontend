import React from "react";

import { OpponentBoardGrid } from ".";
import { WaitScreen } from "../../waitScreen";

class OpponentBoard extends React.Component {
  state = {
    opponentTurn: false,
    message: "Waiting for your opponent to take a turn...",
    opponentTorpedoCoordinates: ""
  };

  componentDidMount = () => {};
  componentWillUnmount = () => {};

  startWaitingForOpponent = () => {
    // this.setState({ opponentTurn: true });
    // this.interval = setInterval(this.checkOpponentTurn, 5000);
  };

  checkOpponentTurn = () => {
    //pull last opponent message
    //look for the word torpedo
    //grab the coordinates (if none (at start), keep it as "")
    //compare coordinates to opponentTorpedoCoordinates
    //if same, return false
    //if different, assign coordinates to opponentTorpedoCoordinates
    //set opponentTurn to true
    //and   clearInterval(this.interval);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.opponentTurn && <WaitScreen message={this.state.message} />}

        <div className="newBoard">
          Opponent Board
          <OpponentBoardGrid />
        </div>
      </React.Fragment>
    );
  }
}

export default OpponentBoard;
