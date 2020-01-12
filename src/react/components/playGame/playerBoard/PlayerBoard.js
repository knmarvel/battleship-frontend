import React from "react";
import checkWin from "../checkWin.js"

import { PlayerBoardGrid } from ".";

class PlayerBoard extends React.Component {
  handleClick = () => {
    
  };

  checkForWin = () => {
    checkWin()
  }

  render() {
    return (
      <React.Fragment>
        <div 
          className="newBoard"
          onClick = {this.checkForWin}>
          Player Board
          <PlayerBoardGrid />
        </div>
      </React.Fragment>
    );
  }
}

export default PlayerBoard;
