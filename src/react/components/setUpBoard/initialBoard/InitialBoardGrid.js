import React from "react";
import InitialBoardSquare from "./InitialBoardSquare";

export default class InitialBoardGrid extends React.Component {
  label = "";
  newRow = [];
  newBoard = [];
  //use nested loops to define the initial divs
  rowLabels = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

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
