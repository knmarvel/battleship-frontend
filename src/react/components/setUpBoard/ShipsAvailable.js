//this is part of the setUp board, and should be to the side of the
//initial board.  it should vertically display horizontal pictures of
//all 5 ships initially.
//when a ship has been placed, that ship should no longer be visible.

import React from "react";
import { Battleship, Carrier, Cruiser, Destroyer, Submarine } from "../ships";
import { connect, withAsyncAction } from "../../HOCs";

class ShipsAvailable extends React.Component {
  state = {
    battleship: true,
    carrier: true,
    cruiser: true,
    destroyer: true,
    submarine: true,
    hasShipSelected: false
  };

  componentDidUpdate = () =>{
    if(this.props.isShipSelected === null){ 
    }
    else {
      if(this.props.isShipSelected)
      // this.setState(
      //   {
      //     hasShipSelected: true,
      //   }
      // )
      console.log(this.props.isShipSelected.name)
      // nameOfShipSelected = this.props.isShipSelected.name
      // console.log(nameOfShipSelected)

    }
  }

  //===============================
  //janell says:
  //kano - need to find a way to set {hasShipSelected:false} after
  //a ship is placed.  placing happens on the initialBoardGrid page (i think)
  //
  //===============================

  render() {
    return (
      <React.Fragment>
        <div 
        className="shipsAvailable"
        onClick={this.onDivClick}
        >
          Ships Available
          <div>
            {this.state.battleship && (
              <React.Fragment>
                <Battleship />
                {!this.state.hasShipSelected}
              </React.Fragment>
            )}
          </div>
          <div>
            {this.state.carrier && (
              <React.Fragment>
                <Carrier />
                {!this.state.hasShipSelected }
              </React.Fragment>
            )}
          </div>
          <div>
            {this.state.cruiser && (
              <React.Fragment>
                <Cruiser />
                {!this.state.hasShipSelected }
              </React.Fragment>
            )}
          </div>
          <div>
            {this.state.destroyer && (
              <React.Fragment>
                <Destroyer />
                {!this.state.hasShipSelected }
              </React.Fragment>
            )}
          </div>
          <div >
            {this.state.submarine && (
              <React.Fragment>
                <Submarine />
                {!this.state.hasShipSelected}
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { isShipSelected : state.setUpGame.selectShip.result ? state.setUpGame.selectShip.result : null};
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "selectShip")(ShipsAvailable));
