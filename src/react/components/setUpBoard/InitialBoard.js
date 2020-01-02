//this draws a blank board, composed of 10x10 grids, each labeled in JS
//when a div is clicked, it calculates what the grid numbers would be for
//the ship being placed, and stores them to post when the Ready button is clicked.
import React from "react";
import { connect } from "react-redux";
import { withAsyncAction } from "../../HOCs";
// import { placeShip } from "../../../redux";

class InitialBoard extends React.Component {
  placeShipClick = e => {
    //suggestion: try to break this down into multiple smaller functions.
    //determine ship to be placed by taking from the state
    //of selectedShip from ShipsAvailable
    //determine orientation and size from the ship component in the ships folder
    //calculate what grid it covers if horizontal
    //determine if it's a valid placement
    //(suggestion: check if the first and last calculated grids id's are valid)
    //calculate what grid it covers if vertical
    //determine if it's a valid placement
    //if it's not valid, give some sort of visual feedback (flash red?)
    //if it's valid, make posts to the message board of all the grid areas covered.
    //(ie, call the action creator placeShip)
    //draw the ship on the grid.
    //return cursor to the no-ship-selected cursor.
  };

  SillyplaceShip = () => {
    // console.log(this.props.placeShip);

    //this sends the message "test" - works.  Will need to send "Game 1234 submarine B2"
    this.props.placeShip({ text: "test" });
  };
  drawBoard = () => {
    //use nested loops to define the initial divs
    let rowLabels = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    //first, draw the header row
    for (let headerRowLabels = 0; headerRowLabels <= 10; headerRowLabels++) {
      if (headerRowLabels === 0) {
        let label = " ";
        console.log(label);
      } else {
        let label = headerRowLabels;
        console.log(label);
      }

      //create a new div with innerHTML of label

      //draw that div to the screen
    }
    //then draw the rest of the rows
    for (let row = 1; row <= 10; row++)
      //create a div with label of rowLabel[row]

      for (let column = 0; column <= 10; column++) {
        if (column === 0) {
          let label = rowLabels[row];
          console.log(label);
        } else {
          let label = rowLabels[row] + column.toString();
          console.log(label);
        }
        //create a div
        //give it an id of label  example: A1
        //give it a class that's styled in the CSS to be a specific size, hover, etc
        //the css should be under "setUpBoard.css"
        //give it an onClick of this.placeShip
        //draw that div on the screen
      }
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.SillyplaceShip}>DANGEROUS-BUTTON </button>
        This is the initial board
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { selectedShip: state.selectedShip };
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "placeShip")(InitialBoard));
