import React from "react";
import InitialBoardSquare from "./InitialBoardSquare";
import { connect } from "../../../HOCs";
// import twoHorizontal from "../../../../Battleship-image/ships/2Horizontal.PNG";
// import threeHorizontal from "../../../../Battleship-image/ships/3Horizontal.PNG";
// import fourHorizontal from "../../../../Battleship-image/ships/4Horizontal.PNG";
// import fiveHorizontal from "../../../../Battleship-image/ships/5Horizontal.PNG";
// import twoVertical from "../../../../Battleship-image/ships/2Vertical.PNG";
// import threeVertical from "../../../../Battleship-image/ships/3Vertical.PNG";
// import fourVertical from "../../../../Battleship-image/ships/4Vertical.PNG";
// import fiveVertical from "../../../../Battleship-image/ships/4Vertical.PNG";

import {
  placeBattleship,
  placeCarrier,
  placeCruiser,
  placeDestroyer,
  placeSubmarine
} from "../../../../redux/index";

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

  drawSquare = (label, isShip) => {
    return (
      <InitialBoardSquare
        value={label}
        isShip={isShip}
        onClick={this.handleClick}
        key={label}
      />
    );
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

  handleClick = e => {
    this.targetRow = e.target.innerHTML.slice(0, 1);
    this.targetColumn = e.target.innerHTML.slice(1);
    if (this.targetColumn === "" || this.targetColumn === "0") {
      return;
    } //is the case if a header row/column is clicked
    if (this.props.activeShip === null) {
      console.log("No ship selected");
    } else {
      this.placeShip(this.props.activeShip.name);
    }
  };

  placeShip = () => {
    const position = this.findSegmentPositions(
      this.props.activeShip.length,
      this.props.activeShip.orientation
    );
    if (position === null) {
      return null;
    }
    switch (this.props.activeShip.name) {
      case "battleship":
        this.props.placeBattleship(position);
        break;
      case "carrier":
        this.props.placeCarrier(position);
        break;
      case "cruiser":
        this.props.placeCruiser(position);
        break;
      case "destroyer":
        this.props.placeDestroyer(position);
        break;
      case "submarine":
        this.props.placeSubmarine(position);
        break;
      default:
        alert("No ship selected");
    }
  };

  findSegmentPositions = (length, orientation) => {
    let positionArray = [];
    let positionObject = {
      orientation: orientation,
      coordinates: positionArray
    };
    if (orientation === "horizontal") {
      for (let shipSegment = 0; shipSegment < length; shipSegment++) {
        if (this.targetColumn * 1 + shipSegment > 10) {
          return null;
        }
        positionArray.push(
          this.targetRow + (this.targetColumn * 1 + shipSegment)
        );
      }
    } else {
      let rowIndex = this.rowLabels.indexOf(this.targetRow);
      for (let shipSegment = 0; shipSegment < length; shipSegment++) {
        if (rowIndex + shipSegment > 10) {
          return null;
        }
        positionArray.push(
          this.rowLabels[rowIndex + shipSegment] + this.targetColumn
        );
      }
    }
    return positionObject;
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
    playerName: state.auth.login.result.username,
    activeShip: state.setUpGame.selectShip.result,
    battleshipPosition: state.setUpGame.placeBattleship.result,
    carrierPosition: state.setUpGame.placeCarrier.result,
    cruiserPosition: state.setUpGame.placeCruiser.result,
    destroyerPosition: state.setUpGame.placeDestroyer.result,
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
