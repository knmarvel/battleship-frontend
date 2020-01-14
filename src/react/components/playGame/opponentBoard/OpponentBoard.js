import React from "react";
import { connect } from "react-redux";
// import { withAsyncAction } from "../../../HOCs";
import { OpponentBoardGrid } from ".";
import { WaitScreen } from "../../waitScreen";
// import { postMessage } from "../../../../redux/index";
import { addCoordinates } from "../../../../redux/index";

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
    this.interval = setInterval(this.checkOpponentTurn, 5000);
  };

  checkOpponentTurn = () => {
    if (this.props.torpedoMessage) {
      if (this.props.torpedoMessage.username !== this.props.playerName) {
        clearInterval(this.interval);
        this.toggleTurn();
        let torpedoCoordinates = this.props.torpedoMessage.text
          .split(" ")
          .slice(-1);
        console.log("torpedoCoordinates are " + torpedoCoordinates);
        this.setState({ opponentTorpedoCoordinates: torpedoCoordinates });
        console.log("we need to check hits next");
      }
    }
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
    // return this.props.torpedoMessage;
    //chelsea's function
  };

  toggleTurn = () => {
    // if (this.state.opponentTurn === true) {
    //   this.setState({ opponentTurn: false });
    // } else {
    //   this.setState({ opponentTurn: true });
    // }
  };

  clickHandler = event => {
    this.setState({ TargetCell: event.target.innerHTML });
    this.props.addCoordinates(event.target.innerHTML);
    this.toggleTurn();
    this.startWaitingForOpponent();
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

      torpedoMessage: state.play.fireTorpedo.result
        ? state.play.fireTorpedo.result.message
        : null,

      opponentTorpedoCoordinates: state.play.fireTorpedo.result
        ? state.play.fireTorpedo.result.message.text
        : null,
      TargetCell: state.play.addCoordinates.result
        ? state.play.addCoordinates.result
        : null
    };
  } else return {};
};

// export default OpponentBoard;
const mapDispatchToProps = { addCoordinates };

export default connect(mapStateToProps, mapDispatchToProps)(OpponentBoard);
