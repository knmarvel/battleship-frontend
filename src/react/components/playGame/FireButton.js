import React from "react";
import { connect } from "react-redux";
import { fireTorpedo } from "../../../redux/index";
//get the last cell clicked from the oppenent board
// check state to see if player guess hit enemy ship
//send a message to the turnHandler that a turn has been taken

class FireButton extends React.Component {
  FireTorpedo = event => {
    this.props.fireTorpedo({ text: "torpedo " + this.props.TargetCell });

    console.log("Torpedo " + this.props.TargetCell + " Fired!");
  };

  checkStateForHitMarkers(cellToCheck) {
    // for (let i = 0; length of state object; i++)
    // if (object includes(cellToCheck))
    //mark hit on board
  }

  render() {
    return (
      <button
        onClick={this.FireTorpedo}
        style={{ backgroundColor: "red", borderRadius: ".5em" }}
      >
        Fire Torpedo!
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {
    TargetCell: state.play.addCoordinates.result
      ? state.play.addCoordinates.result
      : null
  };
};

// export default FireButton;
const mapDispatchToProps = { fireTorpedo };

export default connect(mapStateToProps, mapDispatchToProps)(FireButton);
