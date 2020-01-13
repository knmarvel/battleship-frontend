import React from "react";

import { PlayerBoardGrid } from ".";

class PlayerBoard extends React.Component {
  handleReadyClick = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="newBoard">
          Player Board
          <PlayerBoardGrid />
        </div>
      </React.Fragment>
    );
  }
}

export default PlayerBoard;
