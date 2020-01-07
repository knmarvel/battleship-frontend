//this needs to pop up when a ship is clicked on "ShipsAvailable" during
//the setup.
//suggest you use "mapStateToProps" to get the information needed
//(current ship, name, orientation)
//and "connect" along with "withAsyncAction" when exporting

import React from "react";
import { ConfirmOrientationButton, RotationButton } from ".";
import { Modal } from "semantic-ui-react";
import { connect } from "../../HOCs/index";

class RotationPopup extends React.Component {
  state = {
    visibility: "hidden",
    ship: "",
    orientation: "horizontal"
  };

  componentDidMount = () => {
    //note: may need to use .then here
    this.determineWhichShip();
    this.determineOrientation(this.state.ship);
    this.drawShip(this.state.ship, this.state.orientation);
  };

  determineWhichShip = () => {
    //set state to the ship
  };

  determineOrientation = ship => {
    //set state to the orientation
  };

  drawShip = (ship, orientation) => {
    //return a component from the "ships" folder in "components"
  };

  render() {
    return (
      <Modal>
        <p>Select Orientation</p>
        {this.state.ship}
        <ConfirmOrientationButton />
        <RotationButton />
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    ship: state.ship.ship,
    name: state.ship.name
  };
};

export default connect(mapStateToProps)(RotationPopup);
