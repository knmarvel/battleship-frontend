import React from "react";

import { OpponentBoardGrid } from ".";

class OpponentBoard extends React.Component {
  state = {
    TargetCell: ""
  };

  clickHandler = event => {
    console.log("test Fire " + event.target.innerHTML)
    this.setState({TargetCell : event.target.innerHTML})
  }

  render() {
    return (
      <React.Fragment>
        <div className="newBoard" onClick={this.clickHandler}>
          Opponent Board
          <OpponentBoardGrid/>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    TargetCell: state.TargetCell,
  };
};

// function connect (mapStateToProps,mapDispatchToProps)
export default OpponentBoard;
