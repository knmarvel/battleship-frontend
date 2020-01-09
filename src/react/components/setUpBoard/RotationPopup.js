//this needs to pop up when a ship is clicked on "ShipsAvailable" during
//the setup.
//suggest you use "mapStateToProps" to get the information needed
//(current ship, name, orientation)
//and "connect" along with "withAsyncAction" when exporting

// import React from "react";
// import { ConfirmOrientationButton, RotationButton, ShipsAvailable } from ".";
// import { connect, withAsyncAction } from "../../HOCs";

// class RotationPopup extends React.Component {
//   // state = {
//   //   selectedShip: this.props.selectedShip,
//   //   shipName: this.props.ship.name,
//   //   shipPicture: this.props.ship.orientation.picture,
//   //   orientation: "horizontal"
//   // };

//   componentDidMount = () => {
//     //note: may need to use .then here
//     this.determineWhichShip();
//     this.determineOrientation(this.state.ship);
//     this.drawShip(this.state.ship, this.state.orientation);
//   };

//   determineWhichShip = () => {
//     //set state to the ship
//   };

//   determineOrientation = ship => {
//     //set state to the orientation
//   };

//   drawShip = (ship, orientation) => {
//     //return a component from the "ships" folder in "components"
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <p>Select Orientation</p>
//         {this.props.selectedShip}
//         <ConfirmOrientationButton />
//         <RotationButton />
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     selectedShip: state.selectedShip
//   };
// };

// export default connect(mapStateToProps)(RotationPopup);
