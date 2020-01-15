import React from "react";
import { PlayerBoardGrid } from ".";

class PlayerBoard extends React.Component {
  handleReadyClick = () => {};

  render() {
    return (
      <React.Fragment>
        <div>
          Player Board
          <div className="newBoard">
            <PlayerBoardGrid />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PlayerBoard;
