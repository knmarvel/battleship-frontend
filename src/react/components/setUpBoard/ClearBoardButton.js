//this button shows up on the main setup board page, next to the
//ready button, and is used to erase all ships placed by the player
//during initial setup.

import React from "react";

class ClearBoardButton extends React.Component {
  handleClick = () => {
    console.log("ClearBoardButton was clicked.");
    //set the state of all the ships locations back to empty arrays

    //todo: make sure that setupBoard is redrawn empty

    //make sure that ships in the "available ships" section are redrawn

    //delete all messages from the player that have been sent after "Game 1234 start"
  };

  render() {
    return <button onClick={this.handleClick}>Clear Board</button>;
  }
}

export default ClearBoardButton;
