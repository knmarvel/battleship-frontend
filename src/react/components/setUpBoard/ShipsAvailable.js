import React from "react";
import { Battleship, Carrier, Cruiser, Destroyer, Submarine } from "../ships";
import { connect, withAsyncAction } from "../../HOCs";
import { selectShip } from "../../../redux/index";

class ShipsAvailable extends React.Component {

      
  renderBattleship = () => {
    if(this.props.isShipSelected === null){
      if(this.props.placeBattleship === undefined){
        return <Battleship />
      }
    }
    if(this.props.isShipSelected.name !== "battleship"){
        if(this.props.placeBattleship === undefined){
          return <Battleship />
        }  
      }
    else{
      return <div>The ship once lived here</div>
    }
  }

  renderCarrier = () => {
    if(this.props.isShipSelected === null){
      if(this.props.placeCarrier === undefined){
        return <Carrier />
      }
    }
    if(this.props.isShipSelected.name !== "carrier"){
        if(this.props.placeCarrier === undefined){
          return <Carrier />
        }  
      }
      return <div>The ship once lived here</div>
  }

  renderCruiser = () => {
    if(this.props.isShipSelected === null){
      if(this.props.placeCruiser === undefined){
        return <Cruiser />
      }
    }
    if(this.props.isShipSelected.name !== "cruiser"){
        if(this.props.placeCruiser === undefined){
          return <Cruiser />
        }  
      }
      return <div>The ship once lived here</div>
  }

  renderDestroyer = () => {
    if(this.props.isShipSelected === null){
      if(this.props.placeDestroyer === undefined){
        return <Destroyer />
      }
    }
    if(this.props.isShipSelected.name !== "destroyer"){
        if(this.props.placeDestroyer === undefined){
          return <Destroyer />
        }  
      }
      return <div>The ship once lived here</div>
  }

  renderSubmarine = () => {
    if(this.props.isShipSelected === null){
      if(this.props.placeSubmarine === undefined){
        return <Submarine />
      }
    }

    if(this.props.isShipSelected.name !== "submarine"){
        if(this.props.placeSubmarine === undefined){
          return <Submarine />
        }  
      }
      return <div>The ship once lived here</div>
  }

  render() {
    return (
      <React.Fragment>
        <div className = "shipsAvailable">
          {this.renderBattleship()}
          {this.renderCarrier()}
          {this.renderCruiser()}
          {this.renderDestroyer()}
          {this.renderSubmarine()}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { isShipSelected : state.setUpGame.selectShip.result ? state.setUpGame.selectShip.result : null,
           battleshipPlaced: state.placeBattleship,
           carrierPlaced: state.placeCarrier,
           cruiserPlaced: state.placeCruiser,
           destroyerPlaced: state.placeDestroyer,
           submarinePlaced: state.placeSubmarine
  };
};
const mapDispatchToProps = { selectShip };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("setUpGame", "selectShip")(ShipsAvailable));
