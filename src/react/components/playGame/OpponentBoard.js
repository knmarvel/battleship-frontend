//this should initially start out as a blank grid like the one drawn in InitialBoard.
//each square should light up on hover.
//on click for any square, we need to trigger a fireTorpedo function
//suggestion: instead of simply rendering <InitialBoard>, copy over the board
//drawing code, and then add click handler for fireTorpedo.

//this draws a blank board, composed of 10x10 grids, each labeled in JS
//when a div is clicked, it fires a torpedo.
import React from "react";

class OpponentBoard extends React.Component {
  fireTorpedo = e => {
    //you are instructed for when to update from the TurnHandler component.
    //use "connect" to read the ready state from there.
    //suggestion: try to break this down into multiple smaller functions.
    //determine if there's a last torpedo message from you ("Game 1234 torpedo B5")
    //if there is, delete that message
    //this is because we are limited to 100 messages to retrieve.
    //then...
    //retrieve the coordinate locations from the grid square selected.
    //post in the message board "Game 1234 torpedo A1" - this allows
    //the other player to read what your torpedo was.
    //compare your torpedo location to all the ship locations posted by
    //the other player.
    //if you find a match, "like" that message.
    //if you find a match, change the css on the board grid to indicate a hit
    //if a match, check the "like" count on all posts by opponent with that boat
    //name to see if all the spots have been hit (ship sunk)
    //if no match is found, change the css on the board grid to indicate a miss
    //make this grid square unclickable
    //pop up a message for a hit, sinking a ship, or a miss
  };

  drawBoard = () => {
    //use nested loops to define the Opponent divs
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
    return <React.Fragment>This is the Opponent board</React.Fragment>;
  }
}

export default OpponentBoard;
