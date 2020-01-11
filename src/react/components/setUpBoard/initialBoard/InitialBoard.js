//this draws a blank board, composed of 10x10 grids, each labeled in JS
//when a div is clicked, it calculates what the grid numbers would be for
//the ship being placed, and stores them to post when the Ready button is clicked.
import React from "react";
import { connect } from "react-redux";
import { withAsyncAction } from "../../../HOCs";
import InitialBoardGrid from "./InitialBoardGrid";
import { ClearBoardButton, ReadyButton } from "../index";
import { Link } from "../../index";

class InitialBoard extends React.Component {
  newBoard = [];
  newRow = [];
  label = "";

  handleReadyClick = () => {
    console.log("ready button clicked mama");
  };

  render() {
    return (
      <React.Fragment>
        <div className="newBoard">
          <InitialBoardGrid />
        </div>
        {/* <Link
          to="/play"
          className="btn btn-primary"
          onClick={this.handleReadyClick}
        >
          Ready Mama!
        </Link> */}
        <ReadyButton />
        <ClearBoardButton />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // selectedShip: state.selectedShip
  };
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "placeBattleship")(InitialBoard));
