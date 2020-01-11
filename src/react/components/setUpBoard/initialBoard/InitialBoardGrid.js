import React from "react";
import InitialBoardSquare from "./InitialBoardSquare";
import { connect } from "../../../HOCs";
import { placeBattleship, placeCarrier, placeCruiser, placeDestroyer, placeSubmarine } from "../../../../redux/index";

class InitialBoardGrid extends React.Component {
  state = {
    playerName: this.props.playerName
  };

  label = "";
  newRow = [];
  newBoard = [];
  //use nested loops to define the initial divs
  rowLabels = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  targetRow = null;
  targetColumn = null;


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
    this.targetRow = e.target.innerHTML.slice(0, 1);
    this.targetColumn = e.target.innerHTML.slice(1);
    if (this.targetColumn === "" || this.targetColumn === "0") {
      return;
    } //is the case if a header row/column is clicked
    console.log("target row is " + this.targetRow);
    console.log("target column is " + this.targetColumn);
    console.log(e.target.innerHTML);
    if(this.props.activeShip === null){
      console.log("No ship selected")
    }
    else{
      this.placeShip(this.props.activeShip.name)
    }
  };

  placeShip = () => {
    const position = this.findSegmentPositions(this.props.activeShip.length, this.props.activeShip.orientation)
    if(position === null){
      return null
    }
    switch(this.props.activeShip.name){
      case "battleship":
        this.props.placeBattleship(position)
        break;
      case "carrier":
        this.props.placeCarrier(position)
        break;
      case "cruiser":
        this.props.placeCruiser(position)
        break;
      case "destroyer":
        this.props.placeDestroyer(position)
        break;
      case "submarine":
        this.props.placeSubmarine(position)
        break;
      default: 
        alert("No ship selected")
    }
  }

  findSegmentPositions = (length, orientation) => {
    let positionArray = []
    if(orientation === "horizontal"){
      for(let shipSegment = 0; shipSegment < length; shipSegment ++){
        if((this.targetColumn*1) + shipSegment > 10){
          return null
        }
        positionArray.push(this.targetRow + ((this.targetColumn*1)+shipSegment))
      }
    }
    else{
      let rowIndex = this.rowLabels.indexOf(this.targetRow)
      for(let shipSegment = 0; shipSegment < length; shipSegment++){
        if(rowIndex + shipSegment > 10){
          return null
        }
        positionArray.push(((this.rowLabels[rowIndex + shipSegment]) + this.targetColumn))
      }
    }
    return positionArray
  }

  render() {
    //first, draw the header row
    if(this.newBoard.length > 0){
      this.newBoard = []
    }
    if(this.newRow.length > 0){
      this.newRow = []
    }
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
  return { playerName: state.auth.login.result.username,
           activeShip: state.setUpGame.selectShip.result,
           battleshipPosition: state.setUpGame.placeBattleship.result,
           carrierPosition: state.setUpGame.placeCarrier.result,
           cruiserPosition: state.setUpGame.placeCruiser.result,
           submarinePosition: state.setUpGame.placeSubmarine.result
          };
};

const mapDispatchToProps = { 
  placeBattleship,
  placeCarrier,
  placeCruiser,
  placeDestroyer,
  placeSubmarine
 };

export default connect(mapStateToProps, mapDispatchToProps)(InitialBoardGrid);
