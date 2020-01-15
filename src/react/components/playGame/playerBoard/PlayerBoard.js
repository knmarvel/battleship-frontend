import React from "react";
import { PlayerBoardGrid } from ".";
import { connect } from "../../../HOCs";
import {
  addCoordinates,
  fetchLastMessage,
  startBoard
} from "../../../../redux/index";

class PlayerBoard extends React.Component {
  state = {
    opponentName: "",
    boardReady: false,
    opponentTurn: false,
    TargetCell: "",
    hitAddress: [],
    missAddress: []
  };

  componentDidMount = () => {
    this.determineOpponentName();
    setInterval(this.checkForTorpedoAndUpdateBoard, 5000);
  };

  componentDidUpdate = () => {
    this.checkForTorpedoAndUpdateBoard();
  };

  determineOpponentName = () => {
    if (this.props.playerName === "playerA") {
      this.setState({ opponentName: "playerB" });
    } else {
      this.setState({ opponentName: "playerA" });
    }
  };

  determineFirstMove = () => {
    if (this.props.playerName === "playerB") {
      this.setState({ opponentTurn: true });
      this.startWaitingForTurn();
    }
  };
  componentWillUnmount = () => {
    clearInterval();
  };

  startWaitingForTurn = () => {};

  handleReadyClick = () => {
    this.setState({ boardReady: true });
  };

  checkForTorpedoAndUpdateBoard = () => {
    console.log("checking for my turn");
    if (this.state.opponentTurn === true) {
      return;
    }
    console.log(
      "opponent name that we're looking for torpedos is " +
        this.state.opponentName
    );
    this.props.fetchLastMessage(this.state.opponentName).then(result => {
      let opponentTorpedoCoordinates = result.payload.messages[0].text
        .split(" ")
        .slice(-1);
      this.setState = { TargetCell: opponentTorpedoCoordinates };
      console.log(
        "last word of last message from opponent is:  " + this.state.TargetCell
      );
      //check game #
      let messageGameNumber = result.payload.messages[0].text
        .split(" ")
        .slice(1, 2);
      console.log(" opponent message game number is " + messageGameNumber);
      console.log("props gameNumber is " + this.props.gameNumber);
      if (messageGameNumber && this.props.gameNumber) {
        if (messageGameNumber.toString() === this.props.gameNumber.toString()) {
          console.log("same game number found");
          if (result.payload.messages[0].text.includes("torpedo")) {
            let torpedoStatus = this.props.board[this.props.playerName][
              opponentTorpedoCoordinates
            ].torpedo;
            console.log(
              "torpedo status for my board coordinates: " + torpedoStatus
            );
            if (torpedoStatus === false) {
              this.props.board[this.props.playerName][
                opponentTorpedoCoordinates
              ].torpedo = true;
            }
            this.checkStateForHitMarkers(this.state.TargetCell);
            this.toggleTurn();
          }
        }
      }
    });
  };

  checkStateForHitMarkers(cellToCheck) {
    if (this.state.boardReady === false) {
      return;
    } else {
      console.log(this.props.board[this.props.playerName][cellToCheck].ship);
      if (this.props.board[this.props.playerName][cellToCheck].ship === null) {
        alert("Miss");
        this.returnDecision("Miss", cellToCheck);
        //we also want to put a miss token in the appropriate div
      } else {
        alert("HIT!");
        this.returnDecision("Hit", cellToCheck);
        //check for sinkage (another function)
        //we need to put a hit token in the appropriate div
      }
    }
  }

  returnDecision = (msg, cellToCheck) => {
    if (msg === "Hit") {
      this.setState({
        hitAddress: this.state.hitAddress.concat(cellToCheck)
      });
      console.log(this.state.hitAddress);
    } else {
      this.setState({
        missAddress: this.state.missAddress.concat(cellToCheck)
      });
      console.log(this.state.missAddress);
    }
  };

  toggleTurn = () => {
    if (this.state.opponentTurn === true) {
      this.setState({ opponentTurn: false });
    } else {
      this.setState({ opponentTurn: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Player Board</h3>
          <div className="newBoard">
            <PlayerBoardGrid
              hitAddress={this.state.hitAddress}
              missAddress={this.state.missAddress}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerName: state.auth.login.result.username,
    gameNumber: state.welcome.startGame.result
      ? state.welcome.startGame.result.message.text.slice(5, 9)
      : undefined,
    board: state.manipulateBoards.startBoard.result
      ? state.manipulateBoards.startBoard.result
      : null
    // TargetCell: state.play.addCoordinates.result
    //   ? state.play.addCoordinates.result
    //   : null
  };
};
const mapDispatchToProps = { addCoordinates, fetchLastMessage, startBoard };

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBoard);
