

import React from "react";
import { InitialBoard, ShipsAvailable } from "../components/setUpBoard";
import { Menu } from "../components";
import "./SetUpBoard.css";
import { connect } from "../HOCs"

class SetUpBoard extends React.Component {
  whatCursor = () => {
    if(this.props.selectedShip !== null){
      if(this.props.selectedShip.name === "battleship"){
        console.log("yes")
        this.props.selectedShip.orientation === "horizontal" 
          ? document.body.style.cursor = "url('./horizShip4Cursor.png'),help" 
          : document.body.style.cursor = "url('./vertShip4Cursor.png'),help"
      }
      if(this.props.selectedShip.name === "carrier"){
        console.log("yes")
        this.props.selectedShip.orientation === "horizontal" 
          ? document.body.style.cursor = "url('./horizShip5Cursor.png'),help" 
          : document.body.style.cursor = "url('./vertShip5Cursor.png'),help"
      }
      if(this.props.selectedShip.name === "submarine"){
        console.log("yes")
        this.props.selectedShip.orientation === "horizontal" 
          ? document.body.style.cursor = "url('./horizShip3Cursor.png'),help" 
          : document.body.style.cursor = "url('./vertShip3Cursor.png'),help"
      }
      if(this.props.selectedShip.name === "cruiser"){
        console.log("yes")
        this.props.selectedShip.orientation === "horizontal" 
          ? document.body.style.cursor = "url('./horizShip2Cursor.png'),help" 
          : document.body.style.cursor = "url('./vertShip2Cursor.png'),help"
      }
      if(this.props.selectedShip.name === "destroyer"){
        console.log("yes")
        this.props.selectedShip.orientation === "horizontal" 
          ? document.body.style.cursor = "url('./horizShip1Cursor.png'),help" 
          : document.body.style.cursor = "url('./vertShip1Cursor.png'),help"
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        {console.log(this.whatCursor())}
        <Menu />
        <h2>PLACE YOUR SHIPS</h2>
        <div className="setUpBoard">
          <div className="initialBoard">
            <InitialBoard />
          </div>
          <ShipsAvailable />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedShip: state.setUpGame.selectShip.result
  };
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetUpBoard);

