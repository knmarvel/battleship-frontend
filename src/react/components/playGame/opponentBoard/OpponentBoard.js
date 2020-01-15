import React from "react";
import { connect } from "react-redux";
// import { withAsyncAction } from "../../../HOCs";
import { OpponentBoardGrid } from ".";
import { WaitScreen } from "../../waitScreen";
// import { postMessage } from "../../../../redux/index";
import { addCoordinates, fetchLastMessage } from "../../../../redux/index";
import { FireButton } from "../index";
import board from "../../setUpBoard/whereDoTheShipsLive";

// import {addCoordinates} from "../../../../redux/index"

class OpponentBoard extends React.Component {
  state = {
    opponentTurn: false,
    waitMessage: "Waiting for your opponent to take a turn...",
    winMessage: "Congratulations!  You won!  Your opponent has surrendered.",
    // opponentTorpedoCoordinates: "",
    TargetCell: "",
    opponentName: "",
    playerHasWon: false
  };

  componentDidMount = () => {
    this.determineOpponentName();
    this.determineFirstMove();
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
      this.startWaitingForOpponent();
    }
  };

  componentWillUnmount = () => {};

  startWaitingForOpponent = () => {
    this.interval = setInterval(this.checkOpponentTurn, 5000);
  };

  checkOpponentTurn = () => {
    console.log(
      "opponent name that we're looking for torpedos is " +
        this.state.opponentName
    );
    this.props.fetchLastMessage(this.state.opponentName).then(result => {
      let opponentTorpedoCoordinates = result.payload.messages[0].text
        .split(" ")
        .slice(-1);
      console.log(
        "opponentTorpedoCoordinates are " + opponentTorpedoCoordinates
      );

      //check game #
      let messageGameNumber = result.payload.messages[0].text
        .split(" ")
        .slice(1, 2);
      console.log(" opponent message game number is " + messageGameNumber);
      console.log("props gameNumber is " + this.props.gameNumber);
      if (messageGameNumber == this.props.gameNumber) {
        console.log("same game number found");
      } else {
        console.log(
          "it looks like " +
            messageGameNumber +
            " and  " +
            this.props.gameNumber +
            " are different."
        );
        // window.alert("  Aborting mission.  Mission fail.");
        return;
      }
      if (result.payload.messages[0].text.includes("surrender")) {
        this.setState({ playerHasWon: true });
      }
      if (result.payload.messages[0].text.includes("torpedo")) {
        let torpedoStatus = this.props.board[this.props.playerName][
          opponentTorpedoCoordinates
        ].torpedo;
        console.log(
          "torpedo status for opponent board coordinates: " + torpedoStatus
        );
        if (torpedoStatus === false) {
          clearInterval(this.interval);
          this.toggleTurn();
        }
      }
    });
  };

  getOpponentTorpedoMessage = () => {
    // return this.props.torpedoMessage;
    //chelsea's function
  };

  toggleTurn = () => {
    if (this.state.opponentTurn === true) {
      this.setState({ opponentTurn: false });
    } else {
      this.setState({ opponentTurn: true });
    }
  };

  clickHandler = event => {
    this.setState({ TargetCell: event.target.innerHTML });
    this.props.addCoordinates(event.target.innerHTML);
    this.startWaitingForOpponent();
  };

  handleFireButtonClick = () => {
    if (this.state.TargetCell) {
      console.log("we have a target cell");
      this.toggleTurn();
    } else {
      console.log("we do not have a target cell");
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.opponentTurn && (
          <WaitScreen message={this.state.waitMessage} />
        )}
        <div>
          <h3>Opponent Board</h3>
          <div className="newBoard" onClick={this.clickHandler}>
            <OpponentBoardGrid
              hitAddress={this.props.hitAddress}
              missAddress={this.props.missAddress}
            />
          </div>
        </div>
        <div onClick={this.handleFireButtonClick}>
          <FireButton />
        </div>
        {/* <button onClick={this.toggleTurn}>Toggle turn</button> */}
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

      // opponentTorpedoCoordinates: state.play.fireTorpedo.result
      //   ? state.play.fireTorpedo.result.message.text
      //   : null,
      TargetCell: state.play.addCoordinates.result
        ? state.play.addCoordinates.result
        : null,

      board: state.manipulateBoards.startBoard.result,

      gameNumber: state.welcome.startGame.result
        ? state.welcome.startGame.result.message.text.slice(5, 9)
        : undefined
    };
  } else return {};
};

// export default OpponentBoard;
const mapDispatchToProps = { addCoordinates, fetchLastMessage };

export default connect(mapStateToProps, mapDispatchToProps)(OpponentBoard);
