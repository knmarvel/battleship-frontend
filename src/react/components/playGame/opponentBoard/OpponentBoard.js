import React from "react";

import { OpponentBoardGrid } from ".";

class OpponentBoard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="newBoard">
          <h3>Opponent Board</h3>
          <OpponentBoardGrid />
        </div>
      </React.Fragment>
    );
  }
}

export default OpponentBoard;
