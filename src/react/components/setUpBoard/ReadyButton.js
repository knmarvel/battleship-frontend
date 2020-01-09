//this button shows up on the main setup board page, next to the
//ClearBoard button, and is used to confirm and post the board
//during initial setup.
//suggest you use "mapStateToProps" to get the locations
//and "connect" along with "withAsyncAction" when exporting

import React from "react";
import { connect, withAsyncAction } from "../../HOCs";

class ReadyButton extends React.Component {
  handleClick = () => {
    console.log("ReadyButton was clicked.");
    //verify that all 5 ships have been placed
    this.verifyAllShipsPlaced();

    //read the locations of all 5 ships
    this.readLocations();

    //post a message on API for each square of each ship
    //example: 'Game 1234 submarine ["A", 1]', 'Game 1234 submarine ["B", 1]'...
    this.postMessagesOfShipLocations();

    //redirect the page from the setupBoard page to the playGame Page
    this.redirectToPlayGame();
  };

  verifyAllShipsPlaced = () => {};
  readLocations = () => {};
  postMessagesOfShipLocations = () => {};
  redirectToPlayGame = () => {};

  render() {
    return <button onClick={this.handleClick}>Ready!</button>;
  }
}

const mapStateToProps = state => {
  return {
    shipsPlacedMessage: state.setUpGame.placeShip.result.message
  };
};

export default connect(mapStateToProps)(ReadyButton);
