import React from "react";

import { OpponentBoardGrid } from ".";
import { WaitScreen } from "../../waitScreen";
import { connect, withAsyncAction } from "../../../HOCs";
import { postMessage } from "../../../../redux/index";

class OpponentBoard extends React.Component {
  state = {
    opponentTurn: false,
    message: "Waiting for your opponent to take a turn...",
    opponentTorpedoCoordinates: ""
  };

  componentDidMount = () => {
    //determine if this is playerA or playerB.  if it's playerB, set opponentTurn to true.
    this.determineFirstMove();
  };

  determineFirstMove = () => {
    if (this.props.playerName === "playerB") {
      this.setState({ opponentTurn: true });
    }
  };

  componentWillUnmount = () => {};

  startWaitingForOpponent = () => {
    // this.setState({ opponentTurn: true });
    // this.interval = setInterval(this.checkOpponentTurn, 5000);
  };

  checkOpponentTurn = () => {
    this.getOpponentTorpedoMessage();
    //look for the word torpedo
    //grab the coordinates (if none (at start), keep it as "")
    //compare coordinates to opponentTorpedoCoordinates
    //if same, return false
    //if different, assign coordinates to opponentTorpedoCoordinates
    //set opponentTurn to true
    //and
    //clearInterval(this.interval);
  };

  getOpponentTorpedoMessage = () => {
    //chelsea's function
  };

  toggleTurn = () => {
    this.props.postMessage({ text: "pretend torpedo Z4" });
    if (this.state.opponentTurn === true) {
      this.setState({ opponentTurn: false });
    } else {
      this.setState({ opponentTurn: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.opponentTurn && <WaitScreen message={this.state.message} />}

        <div className="newBoard">
          Opponent Board
          <OpponentBoardGrid />
          <button onClick={this.toggleTurn}>Toggle turn</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login.result) {
    return {
      playerName: state.auth.login.result.username,
      token: state.auth.login.result.token,
      opponentTorpedoCoordinates: state.play
    };
  } else return {};
};

const mapDispatchToProps = {
  // checkReadyStart,
  // deleteMessage,
  // getOldMessages,
  // startGame
  postMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("auth", "login")(OpponentBoard));
