//this needs to pop up when a ship is clicked on "ShipsAvailable" during
//the setup.  
//suggest you use "mapStateToProps" to get the information needed
//(current ship, name, orientation)
//and "connect" along with "withAsynchAction" when exporting

import React from "react"
import {ConfirmOrientation, RotationButton} from "."

class RotationPopup extends React.Component {
    state = {
        visibility: "hidden",
        }

    componentDidMount = () => {
        this.determineWhichShip()
        .then(this.determineOrientation(this.state.ship))
        .then(this.drawShip(this.state.ship, this.state.orientation))
    }

    determineWhichShip = () => {
        //set state to the ship
    }

    determineOrientation = (ship) => {
        //set state to the orientation
    }

    drawShip = (ship, orientation) => {
        //return a component from the "ships" folder in "components"
    }

    render () {
        return (
        <React.Fragment>
            {this.state.ship} 
           
            "Draw a ship here"
            <ConfirmOrientation/>
            <RotationButton />
        </React.Fragment>)
    }


}

export default RotationPopup