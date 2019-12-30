// these "ship" components are for use in the setup board page for
//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react"

class Cruiser extends React.Component {
    state = {
        name: "Cruiser",
        length: 3,
        orientation: "horizontal",
        gridLocations: [[],[],[]]
    }

    rotateShip = () => {}

    determineGridLocations = () => {}

    selectShipImage = () => {}

    render () {
        return <>image of horizontal or vertical cruiser</>
    }
}

export default Cruiser