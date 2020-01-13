import React from "react";
import { connect } from "react-redux";
import { withAsyncAction } from "../../HOCs";
//get the last cell clicked from the oppenent board
// check state to see if player guess hit enemy ship
//send a message to the turnHandler that a turn has been taken

class FireButton extends React.Component {
    FireTorpedo = event => {

        console.log("Torpedo Fired!");
    };

    checkStateForHitMarkers(cellToCheck) {
        // for (let i = 0; length of state object; i++)
        // if (object includes(cellToCheck))
        //mark hit on board
    }

    render() {
        return <button onClick={this.FireTorpedo} style={{ backgroundColor: "red", borderRadius: ".5em" }}>Fire Torpedo!</button>;
    }
}

// export default FireButton;
const mapStateToProps = state => {
    return {
        // selectedShip: state.selectedShip
    };
};
const mapDispatchToProps = {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withAsyncAction("play", "fireTorpedo")(FireButton));