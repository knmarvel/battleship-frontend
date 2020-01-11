//this button shows up on the main setup board page, next to the
//ready button, and is used to erase all ships placed by the player
//during initial setup.

import React from "react";

class ClearBoardButton extends React.Component {
  handleClick = () => {
    console.log("ClearBoardButton was clicked.");
    window.location.reload();

  };

  render() {
    return <button onClick={this.handleClick}>Clear Board</button>;
  }
}

export default ClearBoardButton;
