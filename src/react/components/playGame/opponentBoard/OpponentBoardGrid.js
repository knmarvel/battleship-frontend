import React from "react";
import OpponentBoardSquare from "./OpponentBoardSquare";
import { connect } from "../../../HOCs";
// import twoHorizontal from "../../../../Battleship-image/ships/2Horizontal.PNG";
// import threeHorizontal from "../../../../Battleship-image/ships/3Horizontal.PNG";
// import fourHorizontal from "../../../../Battleship-image/ships/4Horizontal.PNG";
// import fiveHorizontal from "../../../../Battleship-image/ships/5Horizontal.PNG";
// import twoVertical from "../../../../Battleship-image/ships/2Vertical.PNG";
// import threeVertical from "../../../../Battleship-image/ships/3Vertical.PNG";
// import fourVertical from "../../../../Battleship-image/ships/4Vertical.PNG";
// import fiveVertical from "../../../../Battleship-image/ships/4Vertical.PNG";

class OpponentBoardGrid extends React.Component {
  label = "";
  newRow = [];
  newBoard = [];
  //use nested loops to define the Opponent divs
  rowLabels = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  targetRow = null;
  targetColumn = null;

  drawSquare = label => {
    return <OpponentBoardSquare value={label} key={label} />;
  };

  drawRow = (newRow, rowLabel) => {
    return <div key={rowLabel}>{newRow}</div>;
  };

  render() {
    //emptying newBoard and newRow so it doesn't infinitely add to itself on changes to state
    this.newBoard = [];
    this.newRow = [];
    let newSquare = "";
    //first, draw the header row

    for (let headerRowLabels = 0; headerRowLabels <= 10; headerRowLabels++) {
      if (headerRowLabels === 0) {
        this.label = "X";
      } else {
        this.label = headerRowLabels;
      }
      newSquare = this.drawSquare(this.label);
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

        newSquare = this.drawSquare(this.label);
        this.newRow.push(newSquare);
      }
      this.newBoard.push(this.drawRow(this.newRow, row));
    }
    this.newBoard.className = "newBoard";

    return this.newBoard;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OpponentBoardGrid);
