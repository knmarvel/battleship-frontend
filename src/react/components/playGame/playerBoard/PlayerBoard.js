import React from "react";
import { PlayerBoardGrid } from ".";

class PlayerBoard extends React.Component {
  handleReadyClick = () => {};

  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Player Board</h3>
          <div className="newBoard">
            <PlayerBoardGrid />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PlayerBoard;
