//this draws a blank board, composed of 10x10 grids, each labeled in JS
//when a div is clicked, it calculates what the grid numbers would be for
//the ship being placed, and stores them to post when the Ready button is clicked.
import React from "react";
import { connect } from "react-redux";
import { withAsyncAction } from "../../HOCs";
import InitialBoardSquare from "./InitialBoardSquare";
import InitialBoardGrid from "./InitialBoardGrid";
import { placeShip } from "../../../redux";

class InitialBoard extends React.Component {
  statee = { newBoard: "" };
  newBoard = [];
  newRow = [];
  label = "";

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

  placeShip = () => {
    //this sends the message "test" - works.  Will need to send "Game 1234 submarine B2"
    this.props.placeShip({ text: "test" });
  };

  handleClick = e => {
    return console.log(e.value);
  };

  //==================================================
  //stopping point: initialboardgrid displays on page
  //onclick does not yet function
  //and drashti wants to test login
  //========================
  render() {
    // let myNewBoard = this.drawBoard();
    return (
      <React.Fragment>
        <div></div>
        <InitialBoardGrid className={"newBoard"} />"
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
