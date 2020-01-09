import React from "react";
import InitialBoardSquare from "./InitialBoardSquare";
import { connect } from "../../../HOCs";
import { fetchLastMessage } from "../../../../redux/index";

class InitialBoardGrid extends React.Component {
  state = {
    playerName: this.props.playerName
  };

  label = "";
  newRow = [];
  newBoard = [];
  //use nested loops to define the initial divs
  rowLabels = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  componentDidMount = () => {
    console.log(this.state.playerName);
  };

  drawSquare = label => {
    return (
      <InitialBoardSquare
        value={label}
        onClick={this.handleClick}
        key={label}
      />
    );
  };

  drawRow = (newRow, rowLabel) => {
    return <div key={rowLabel}>{newRow}</div>;
  };

  handleClick = e => {
    let targetRow = e.target.innerHTML.slice(0, 1);
    let targetColumn = e.target.innerHTML.slice(1);
    if (targetColumn === "" || targetColumn === "0") {
      return;
    } //is the case if a header row/column is clicked
    console.log("target row is " + targetRow);
    console.log("target column is " + targetColumn);
    console.log(e.target.innerHTML);
    this.readShipName();
  };

  readShipName = () => {
    //====================================================
    //janell says:  kano - i'm using connect to use a function "fetchLastMessage"
    //with redux that should return the last message that the player posted.
    //it's returning a promise.  i want the answer lol!
    //the last word of the answer should be the name of the ship,
    //which can be used for the calculations.
    //i think the solution lies in the promise and await features but
    //that's where i got stuck.
    //kano says: we need to open the message object and then get the last word
    //=====================================================
    //

    fetch(
      `https://battleship-capstone-api.herokuapp.com/messages?limit=1&offset=0&username=${this.state.playerName}`
    )
      .then(responseObject => responseObject.json())
      .then(res => {
        let lastMessage = res.messages[0];
        console.log(lastMessage);
        let lastWord = this.determineLastWordOfLastMessage(lastMessage);
        console.log(lastWord);
      });
  };

  determineLastWordOfLastMessage = message => {};

  render() {
    //first, draw the header row
    for (let headerRowLabels = 0; headerRowLabels <= 10; headerRowLabels++) {
      if (headerRowLabels === 0) {
        this.label = "X";
      } else {
        this.label = headerRowLabels;
      }
      let newSquare = this.drawSquare(this.label);
      this.newRow.push(newSquare);
    }

    this.newBoard.push(this.drawRow(this.newRow, "header"));

    //then draw the rest of the rows
    for (let row = 1; row <= 10; row++) {
      this.newRow = [];
      for (let column = 0; column <= 10; column++) {
        if (column === 0) {
          this.label = this.rowLabels[row];
        } else {
          this.label = this.rowLabels[row] + column.toString();
        }
        let newSquare = this.drawSquare(this.label);
        this.newRow.push(newSquare);
      }
      this.newBoard.push(this.drawRow(this.newRow, row));
    }
    this.newBoard.className = "newBoard";
    return this.newBoard;
  }
}

//===================
//stopping point: shaquon meet 11 am zoom tomorrow
//====================

const mapStateToProps = state => {
  return { playerName: state.auth.login.result.username };
};

const mapDispatchToProps = { fetchLastMessage };

export default connect(mapStateToProps, mapDispatchToProps)(InitialBoardGrid);
