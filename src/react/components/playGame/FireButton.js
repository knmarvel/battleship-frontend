import React from "react";
import { connect } from "react-redux";
import {
  fireTorpedo,
  startBoard,
  fetchLastMessage
} from "../../../redux/index";
import { boards } from "../setUpBoard";
//get the last cell clicked from the oppenent board
// check state to see if player guess hit enemy ship
//send a message to the turnHandler that a turn has been taken

class FireButton extends React.Component {
  state = {
    hitAddress: [],
    missAddress: [],
    playerName: this.props.playerName,
    id: 0
  };

  opponentName = this.props.playerName === "playerA" ? "playerB" : "playerA";

  FireTorpedo = event => {
    if (this.props.TargetCell === null) {
      alert("please choose coordinates by clicking on your opponent's board");
    } else {
      let messageToDeleteId = this.getLastTorpedoMessageId();

      this.props.fireTorpedo(
        {
          text:
            "Game " +
            this.props.gameNumber +
            " torpedo " +
            this.props.TargetCell
        },
        messageToDeleteId,
        this.props.token
      );
      boards[this.opponentName][this.props.TargetCell].torpedo = true;

      // console.log("Torpedo " + this.props.TargetCell + " Fired!");
      this.checkStateForHitMarkers(this.props.TargetCell);
    }
  };

  getLastTorpedoMessageId = () => {
    this.props.fetchLastMessage(this.props.playerName).then(result => {
      result.payload.messages.forEach(message => {
        if (message.text.includes("torpedo")) {
          console.log(message.id);
          this.setState({ id: message.id });
          // this.props.deleteMessage(this.state.id, this.props.token);
        }
        return this.state.id;
      });
    });
  };

  checkStateForHitMarkers(cellToCheck) {
    console.log(this.props.board[this.opponentName][cellToCheck].ship);
    if (this.props.board[this.opponentName][cellToCheck].ship === null) {
      alert("Miss");
      this.props.returnDecision("Miss", cellToCheck);
      //we also want to put a miss token in the appropriate div
    } else {
      alert("HIT!");
      this.props.returnDecision("Hit", cellToCheck);
      //check for sinkage (another function)
      //we need to put a hit token in the appropriate div
    }
  }

  checkStateForSinkage(cellToCheck) {
    //tbd
  }

  render() {
    return (
      <button
        onClick={this.FireTorpedo}
        style={{ backgroundColor: "red", borderRadius: ".5em" }}
      >
        Fire Torpedo!
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerName: state.auth.login.result.username,
    TargetCell: state.play.addCoordinates.result
      ? state.play.addCoordinates.result
      : null,
    gameNumber: state.welcome.startGame.result
      ? state.welcome.startGame.result.message.text.slice(5, 9)
      : null,
    board: state.manipulateBoards.startBoard.result,
    token: state.auth.login.result.token
  };
};

// export default FireButton;
const mapDispatchToProps = {
  fireTorpedo,
  startBoard,
  fetchLastMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(FireButton);
