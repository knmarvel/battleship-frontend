import React from "react";
import { connect } from "react-redux";
// import { withAsyncAction } from "../../../HOCs";
import { OpponentBoardGrid } from ".";
import { checkForLose } from "../checkForLose"
import { WaitScreen } from "../../waitScreen";
// import { postMessage } from "../../../../redux/index";
import {
  addCoordinates,
  fetchLastMessage,
  startBoard
} from "../../../../redux/index";
import { FireButton } from "../index";
// import board from "../../setUpBoard/whereDoTheShipsLive";

// import {addCoordinates} from "../../../../redux/index"

class OpponentBoard extends React.Component {
  state = {
    opponentTurn: false,
    waitMessage: "Waiting for your opponent to take a turn...",
    winMessage: "Congratulations!  You won!  Your opponent has surrendered.",
    // opponentTorpedoCoordinates: "",
    TargetCell: "",
    opponentName: "",
    playerHasWon: false,
    hitAddress: [],
    missAddress: [],
    didOpponentWin: false,
    didOpponentAcknowledgeWin: false,
    didOpponentSinkBattleship: false,
    didOpponentSinkCarrier: false,
    didOpponentSinkCruiser: false,
    didOpponentSinkSubmarine: false,
    didOpponentSinkDestroyer: false
  };

  componentDidMount = () => {
    this.determineOpponentName();
    this.determineFirstMove();
    setInterval(this.checkOpponentTurn, 5000);
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

  componentWillUnmount = () => {
    clearInterval();
  };

  startWaitingForOpponent = () => {};

  checkOpponentTurn = () => {
    // console.log("tick");
    if (this.state.opponentTurn === false) {
      return;
    }
    // console.log(
    //   "opponent name that we're looking for torpedos is " +
    //     this.state.opponentName
    // );
    this.props.fetchLastMessage(this.state.opponentName).then(result => {
      let opponentTorpedoCoordinates = result.payload.messages[0].text
        .split(" ")
        .slice(-1);
      // console.log(
      //   "last word of last message from opponent is:  " +
      //     opponentTorpedoCoordinates
      // );
      //check game #
      let messageGameNumber = result.payload.messages[0].text
        .split(" ")
        .slice(1, 2);
      // console.log(" opponent message game number is " + messageGameNumber);
      // console.log("props gameNumber is " + this.props.gameNumber);
      if (messageGameNumber && this.props.gameNumber) {
        if (messageGameNumber.toString() === this.props.gameNumber.toString()) {
          // console.log("same game number found");

          if (result.payload.messages[0].text.includes("surrender")) {
            this.setState({ playerHasWon: true });
          }
          if (result.payload.messages[0].text.includes("torpedo")) {
            let torpedoStatus = this.props.board[this.props.playerName][
              opponentTorpedoCoordinates
            ].torpedo;
            // console.log(
            //   "torpedo status for opponent board coordinates: " + torpedoStatus
            // );
            if (torpedoStatus === false) {
              this.props.board[this.props.playerName][
                opponentTorpedoCoordinates
              ].torpedo = true;
              this.props.startBoard(this.props.board);
              //kano lose conditions pt 1/2//
              this.checkForPlayerLoss(this.props.board)
              //end kano lose conditions pt 1/2//
              this.toggleTurn();
            }
          }
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
    // console.log(this.props.TargetCell);
    if (this.state.TargetCell) {
      console.log("we have a target cell " + this.state.TargetCell);
      this.checkStateForHitMarkers(this.props.TargetCell);
      this.setState({ opponentTurn: true });
    } else {
      // console.log("we do not have a target cell");
    }
  };

  checkStateForHitMarkers(cellToCheck) {
    // console.log(this.props.board[this.state.opponentName][cellToCheck].ship);
    if (this.props.board[this.state.opponentName][cellToCheck].ship === null) {
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

  returnDecision = (msg, cellToCheck) => {
    if (msg === "Hit") {
      this.setState({
        hitAddress: this.state.hitAddress.concat(cellToCheck)
      });
      // console.log(this.state.hitAddress);
    } else {
      this.setState({
        missAddress: this.state.missAddress.concat(cellToCheck)
      });
      // console.log(this.state.missAddress);
    }
  };

  checkForPlayerLoss = (boards)=>{
  
    if(checkForLose(boards[this.props.playerName]) === true){
      this.setState({didPlayerLose: true})
    }
    else{
      if(!this.state.didOpponentSinkBattleship){
        if(checkForLose(boards[this.props.playerName]).includes("battleship")){
          this.setState({didOpponentSinkBattleship: true})
          alert("Your opponent sank your battleship!")
        }
      }
      if(!this.state.didOpponentSinkCarrier){
        if(checkForLose(boards[this.props.playerName]).includes("carrier")){
          this.setState({didOpponentSinkCarrier: true})
          alert("Your opponent sank your carrier!")
        }
      }
      if(!this.state.didOpponentSinkCruiser){
        if(checkForLose(boards[this.props.playerName]).includes("cruiser")){
          this.setState({didOpponentSinkCruiser: true})
          alert("Your opponent sank your cruiser!")
        }
      }
      if(!this.state.didOpponentSinkSubmarine){
        if(checkForLose(boards[this.props.playerName]).includes("submarine")){
          this.setState({didOpponentSinkSubmarine: true})
          alert("Your opponent sank your submarine!")
        }
      }
      if(!this.state.didOpponentSinkDestroyer){
        if(checkForLose(boards[this.props.playerName]).includes("destroyer")){
          this.setState({didOpponentSinkDestroyer: true})
          alert("Your opponent sank your destroyer!")
        }
      }
    }
  }

  render() {
    if(this.state.didPlayerLose){
      return <WaitScreen message="Your opponent destroyed your fleet! You lose!">true</WaitScreen>
    }
    return (
      <React.Fragment>
        {this.state.opponentTurn && (
          <WaitScreen message={this.state.waitMessage} />
        )}
        {this.state.playerHasWon && (
          <WaitScreen message={this.state.winMessage} />
        )}
        <div>
          <h3>Opponent Board</h3>
          <div className="newBoard" onClick={this.clickHandler}>
            <OpponentBoardGrid
              hitAddress={this.state.hitAddress}
              missAddress={this.state.missAddress}
            />
          </div>
        </div>
        <div onClick={this.handleFireButtonClick}>
          <FireButton returnDecision={this.returnDecision} />
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
const mapDispatchToProps = { addCoordinates, fetchLastMessage, startBoard };

export default connect(mapStateToProps, mapDispatchToProps)(OpponentBoard);
