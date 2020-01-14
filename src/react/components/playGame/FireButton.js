import React from "react";
import { connect } from "react-redux";
import { 
  fireTorpedo,
  startBoard
 } from "../../../redux/index";
import { boards } from "../setUpBoard";
//get the last cell clicked from the oppenent board
// check state to see if player guess hit enemy ship
//send a message to the turnHandler that a turn has been taken

class FireButton extends React.Component {
  opponentName = this.props.playerName === "playerA" ? "playerB" : "playerA"

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
      this.checkStateForHitMarkers(this.props.TargetCell)

    }
  };

  checkStateForHitMarkers(cellToCheck) {
    if(this.props.board[this.opponentName][cellToCheck].ship===null){
      alert("Miss")
      //we also want to put a miss token in the appropriate div
    }
    else{
      alert("HIT!")
      //check for sinkage (another function)
      //we need to put a hit token in the appropriate div
      this.checkForSinking()
      

    }
  }

  checkForSinking() {
    let hitShips = [
      ["battleship",4],
      ["carrier",5],
      ["cruiser",3],
      ["submarine",3],
      ["destroyer",2]
    ]
    for(let coordinates in this.props.board[this.opponentName]){
      if(this.props.board[this.opponentName][coordinates].ship && this.props.board[this.opponentName][coordinates].torpedo){
        hitShips.forEach(ship =>{
          if(ship[0] === boards[this.opponentName][coordinates].ship){
            ship[1] -= 1
          }
        })
      }
      
    }
  
    let shipsSunk = 0;
    let sinkingList = "you've sunk the opponent's "
    hitShips.forEach(x => {
      if(x[1]===0){
        shipsSunk++
        if(sinkingList = "you've sunk the opponent's "){
          sinkingList += x[0]
        }
        else{
          sinkingList += "and " + x[0]
        }
      }
    })
    if(shipsSunk === 5){
      sinkingList = "You've sunk the opponent's fleet! You win!"
      
    }
    console.log(shipsSunk)
    if(shipsSunk > 0){
      alert(sinkingList)}
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
    board: state.manipulateBoards.startBoard.result
  };
};

// export default FireButton;
const mapDispatchToProps = { 
  fireTorpedo,
  startBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(FireButton);
