//start checking for the other player to have made a turn.
//suggestion: see Davey Struss' react tutorials for how to set up a timer
//that does something every second (or other amount)

//monitor the message board, waiting for a new message from opponent.
//if the message is a surrender, inform the player that they have won the game

//visually indicate that you are waiting for the other player to take
//their turn (change the CSS).
//make it so that the player cannot click the board to fire another
//torpedo until the opponent has fired their torpedo.

//When it is the player's turn,
// make it so that they can see that they can take their
//turn, and allow the player to take their turn.  (change the CSS for OpponentBoard
//to make it clickable, remove any overlay?)

//my thought is that the easiest way to handle this would be to make a
//semi-transparent overlay that can't be clicked and that has a higher z-factor
//than the rest of the board, and to have a message show there, and maybe a spinner.

//the component(overlay) could have conditional rendering based off
//whether the last message posted was from the player or from the
//opponent.

import React from "react";

class TurnHandler extends React.Component {
  state = {
    visibility: "hidden"
  };

  render() {
    return (
      <div
        className="waitingOverlay"
        style={{ visibility: this.state.visibility }}
      >
        This is the Turn Handler
      </div>
    );
  }
}
//note: initial testing should NOT display "this is the turn handler" unless you set
//the state to visibility: "visible"
export default TurnHandler;
