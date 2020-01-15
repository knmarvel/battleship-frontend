import React from "react";
import { connect } from "react-redux";
import { fireTorpedo, startBoard } from "../../../redux/index";
import { boards } from "../setUpBoard";
import { checkForWin } from "./CheckForWin"
import { WaitScreen } from "../waitScreen/";
//get the last cell clicked from the oppenent board
// check state to see if player guess hit enemy ship
//send a message to the turnHandler that a turn has been taken

class FireButton extends React.Component {
  state = {
    hitAddress: [],
    missAddress: [],
    didPlayerWin: false
  };

  opponentName = this.props.playerName === "playerA" ? "playerB" : "playerA";

  FireTorpedo = event => {
    if (this.props.TargetCell === null) {
      alert("please choose coordinates by clicking on your opponent's board");
    } else {
      this.props.fireTorpedo({
        text:
          "Game " + this.props.gameNumber + " torpedo " + this.props.TargetCell
      });
      boards[this.opponentName][this.props.TargetCell].torpedo = true;
      console.log("Torpedo " + this.props.TargetCell + " Fired!");
      if(checkForWin(boards[this.opponentName])){
        this.setState({didPlayerWin: true})
        alert("YOU WIN")
      }
      // this.checkStateForHitMarkers(this.props.TargetCell);
    }
  };

  winCheck = () =>{
    if(this.state.didPlayerWin){
      return <WaitScreen message="Congratulations! You sunk your opponent's fleet! You win!" />
    }
  }

 

  render() {
    return (

      <span>
        {this.winCheck}
      <button
        onClick={this.FireTorpedo}
        style={{ backgroundColor: "red", borderRadius: ".5em" }}
      >
        Fire Torpedo!
      </button>
      </span>
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
    board: state.manipulateBoards.startBoard.result
  };
};

// export default FireButton;
const mapDispatchToProps = {
  fireTorpedo,
  startBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(FireButton);
