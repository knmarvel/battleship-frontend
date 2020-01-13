import React from "react";
import { connect } from "react-redux";
// import { withAsyncAction } from "../../../HOCs";
import { OpponentBoardGrid } from ".";
import { fireTorpedo, addCoordinates } from "../../../../redux/index";
// import {addCoordinates} from "../../../../redux/index"
class OpponentBoard extends React.Component {
  state = {
    TargetCell: ""
  };

  clickHandler = event => {
    console.log("test Fire " + event.target.innerHTML)
    this.setState({TargetCell : event.target.innerHTML})
    this.props.addCoordinates(this.state.TargetCell)
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
    TargetCell: state.play.TargetCell,
  };
};

// export default OpponentBoard;
const mapDispatchToProps = {fireTorpedo, addCoordinates};

export default connect(
mapStateToProps,
mapDispatchToProps
)(OpponentBoard);