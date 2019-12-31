//we will have drawn and placed ships with Initial board.  I think we would
//be able to copy over the initial board component here, but i am not sure if
//that would bring forward the placed ships.  if it does, then this component
//will simply be about making the CSS for the initial board drawn to be
//unclickable, and then monitoring the messagefeed for new messages,
//changing the CSS to match the opponent's torpedoes
//otherwise, we will need to redraw the board in the same way we did for
//<InitialBoard> and for <OpponentBoard>, and then pull the ship locations
//from the message feed, and draw the ships to the board.
//I'm setting up the skeleton code with the <InitialBoard> just in case
//it actually works...

import React from "react";
import { InitialBoard } from "../setUpBoard";

class PlayerBoard extends React.Component {
  componentDidMount = () => {
    //you are instructed for when to update from the TurnHandler component.
    //use "connect" to read the ready state from there.
    //every time the opponent has fired, read the messages and
    //update the board appropriately.
    //this could be done by reading and storing the info locally for
    //all the boat hits, but i suggest instead checking the torpedo shot
    //mapped against all the messages from the player for boat positions
    //to see if it's a hit, and then changing the css on your board
    //to indicate either a hit or a miss.
    //i think it would be nice if we had a brief pop-up indicating
    //where the torpedo was sent and what the result was - last 1 or 2 seconds
    //and then disappear.
  };
  render() {
    return <InitialBoard className="playerBoard" />;
  }
}

export default PlayerBoard;
