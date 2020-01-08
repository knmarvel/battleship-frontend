//this needs to pop up when a ship is clicked on "ShipsAvailable" during
//the setup.
//suggest you use "mapStateToProps" to get the information needed
//(current ship, name, orientation)
//and "connect" along with "withAsyncAction" when exporting

import React from "react";
import { ConfirmOrientationButton, RotationButton } from ".";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { connect } from "../../HOCs/index";

class RotationPopup extends React.Component {
  state = {
    ship: this.props.ship,
    shipName: this.props.ship.name,
    shipPicture: this.props.ship.orientation.picture,
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
      <Modal trigger={this.props.ship}>
        <Modal.Header>Select Orientation</Modal.Header>
        <Modal.Content>
          <Image wrapped size="medium" src="this.state.shipPicture" />
          <Modal.Description>
            <Header>this.state.shipName</Header>
            <RotationButton />
          </Modal.Description>
        </Modal.Content>
      </Modal>
      // <React.Fragment>
      //   <p>Select Orientation</p>
      //   {this.state.ship}
      //   <ConfirmOrientationButton />
      //   <RotationButton />
      // </React.Fragment>
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
