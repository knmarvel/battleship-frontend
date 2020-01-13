import React from "react";
import { connect } from "react-redux";
// import { withAsyncAction } from "../../../HOCs";
import { OpponentBoardGrid } from ".";
import { WaitScreen } from "../../waitScreen";
import { connect, withAsyncAction } from "../../../HOCs";
import { postMessage } from "../../../../redux/index";
import { fireTorpedo, addCoordinates } from "../../../../redux/index";
// import {addCoordinates} from "../../../../redux/index"

class OpponentBoard extends React.Component {
  state = {
    opponentTurn: false,
    message: "Waiting for your opponent to take a turn...",
    opponentTorpedoCoordinates: "",
    TargetCell: ""
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

  clickHandler = event => {
    console.log("test Fire " + event.target.innerHTML);
    this.setState({ TargetCell: event.target.innerHTML });
    this.props.addCoordinates(this.state.TargetCell);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.opponentTurn && <WaitScreen message={this.state.message} />}

        <div className="newBoard" onClick={this.clickHandler}>
          Opponent Board
          <OpponentBoardGrid />
        </div>
        <button onClick={this.toggleTurn}>Toggle turn</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login.result) {
    return {
      playerName: state.auth.login.result.username,
      token: state.auth.login.result.token,
      opponentTorpedoCoordinates: state.play,
      TargetCell: state.play.TargetCell
    };
  } else return {};
};

const mapDispatchToProps = {
  postMessage,
  fireTorpedo,
  addCoordinates
};

export default connect(mapStateToProps, mapDispatchToProps)(OpponentBoard);
