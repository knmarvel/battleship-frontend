import React from "react";
import PlayerBoardSquare from "./PlayerBoardSquare";
import { connect } from "../../../HOCs";
// import horizontalDestroyer from "../../../../Battleship-image/ships/horizShip1.PNG"
// import horizontalCruiser from "../../../../Battleship-image/ships/horizShip2.PNG"
// import horizontalSubmarine from "../../../../Battleship-image/ships/horizShip3.PNG"
// import horizontalBattleship from "../../../../Battleship-image/ships/horizShip4.PNG"
// import horizontalCarrier from "../../../../Battleship-image/ships/horizShip5.PNG"
// import verticalDestroyer from "../../../../Battleship-image/ships/vertShip1.PNG"
// import verticalCruiser from "../../../../Battleship-image/ships/vertShip2.PNG"
// import verticalSubmarine from "../../../../Battleship-image/ships/vertShip3.PNG"
// import verticalBattleship from "../../../../Battleship-image/ships/vertShip4.PNG"
// import verticalCarrier from "../../../../Battleship-image/ships/vertShip5.PNG"


// import {
//   placeBattleship,
//   placeCarrier,
//   placeCruiser,
//   placeDestroyer,
//   placeSubmarine
// } from "../../../../redux/index";

class PlayerBoardGrid extends React.Component {
  label = "";
  newRow = [];
  newBoard = [];
  //use nested loops to define the Player divs
  rowLabels = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  targetRow = null;
  targetColumn = null;
  


  drawSquare = (label, isShip) => {
    return <PlayerBoardSquare value={label} isShip={isShip} key={label} />;
  };

  drawRow = (newRow, rowLabel) => {
    return <div key={rowLabel}>{newRow}</div>;
  };



  doesAShipResideHereAndIfSoWhichOne = coordinates => {
    if (this.props.battleshipPosition !== null) {
      if (this.props.battleshipPosition.coordinates.includes(coordinates)) {
        return true;
      }
    }

    if (this.props.carrierPosition !== null) {
      this.carrierLocation = []
      if (this.props.carrierPosition.coordinates.includes(coordinates)) {
        return true;
      }
    }

    if (this.props.cruiserPosition !== null) {
      if (this.props.cruiserPosition.coordinates.includes(coordinates)) {
        return true;
      }
    }

    if (this.props.carrierPosition !== null) {
      if (this.props.carrierPosition.coordinates.includes(coordinates)) {
        return true;
      }
    }

    if (this.props.destroyerPosition !== null) {
      if (this.props.destroyerPosition.coordinates.includes(coordinates)) {
        return true;
      }
    }

    if (this.props.submarinePosition !== null) {
      if (this.props.submarinePosition.coordinates.includes(coordinates)) {
        return true;
      }
    }
    return false;
  };

  render() {
    //emptying newBoard and newRow so it doesn't infinitely add to itself on changes to state
    this.newBoard = [];
    this.newRow = [];
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
        let newSquare = "";
        if (!this.doesAShipResideHereAndIfSoWhichOne(this.label)) {
          newSquare = this.drawSquare(this.label, false);
        }
        if (this.doesAShipResideHereAndIfSoWhichOne(this.label)) {
          newSquare = this.drawSquare(this.label, true);
        }
        this.newRow.push(newSquare);
      }
      this.newBoard.push(this.drawRow(this.newRow, row));
    }
    this.newBoard.className = "newBoard";

    return this.newBoard;
  }
}

const mapStateToProps = state => {
  return {
    battleshipPosition: state.setUpGame.placeBattleship.result,
    carrierPosition: state.setUpGame.placeCarrier.result,
    cruiserPosition: state.setUpGame.placeCruiser.result,
    destroyerPosition: state.setUpGame.placeDestroyer.result,
    submarinePosition: state.setUpGame.placeSubmarine.result
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBoardGrid);
