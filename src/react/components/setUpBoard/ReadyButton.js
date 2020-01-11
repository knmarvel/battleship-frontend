//this button shows up on the main setup board page, next to the
//ClearBoard button, and is used to confirm and post the board
//during initial setup.
//suggest you use "mapStateToProps" to get the locations
//and "connect" along with "withAsyncAction" when exporting

import React from "react";
import { connect, withAsyncAction } from "../../HOCs";
import { Redirect } from "../index";

class ReadyButton extends React.Component {
  state = {
    redirect: false
  };

  handleClick = () => {
    console.log("ReadyButton was clicked.");
    //verify that all 5 ships have been placed
    // this.verifyAllShipsPlaced();

    // //read the locations of all 5 ships
    // this.readLocations();

    // //post a message on API for each square of each ship
    // //example: 'Game 1234 submarine ["A", 1]', 'Game 1234 submarine ["B", 1]'...
    // this.postMessagesOfShipLocations();

    //redirect the page from the setupBoard page to the playGame Page
    this.setRedirect();
  };

  verifyAllShipsPlaced = () => {
    if (
      this.props.battleship === null ||
      this.props.carrier === null ||
      this.props.cruiser === null ||
      this.props.destroyer === null ||
      this.props.submarine === null
    ) {
      //should this conditionally render the button?
      alert("Please place all your ships on the board!");
    } else {
      this.readLocations();
      this.postMessagesOfShipLocations();
    }
    this.redirectToPlayGame();
  };
  readLocations = () => {
    //Will this be taken care of in state? if not create array of arrays using Object.entries to loop through below
  };
  postMessagesOfShipLocations = () => {
    //loop through ships entries and create messages based off that
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  redirectToPlayGame = () => {
    if (this.state.redirect === true) {
      console.log("does this work?");
      return <Redirect to="/play" />;
      console.log("this worked!");
      this.setState({
        redirect: false
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.redirectToPlayGame()}
        <button onClick={this.handleClick}>Ready!</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    battleship: state.setUpGame.placeBattleship.result,
    carrier: state.setUpGame.placeCarrier.result,
    cruiser: state.setUpGame.placeCruiser.result,
    destroyer: state.setUpGame.placeDestroyer.result,
    submarine: state.setUpGame.placeSubmarine.result
  };
};

export default connect(mapStateToProps)(ReadyButton);
