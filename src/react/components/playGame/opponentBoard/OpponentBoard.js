import React from "react";

import { OpponentBoardGrid } from ".";

class OpponentBoard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="newBoard">
          Opponent Board
          <OpponentBoardGrid />
        </div>
      </React.Fragment>
    );
  }
}

export default OpponentBoard;
