//these "ship" components are for the setup board's
//graphical drawings and for the play game page, to display the player's
//own ships on their half of the board

import React from "react"

class Destroyer extends React.Component {
    state = {
        name: "Destroyer",
        length: 2,
        orientation: "horizontal",
        gridLocations: [[],[]]
    }

    rotateShip = () => {}

    determineGridLocations = () => {}

    selectShipImage = () => {}

    render () {
        return <>image of horizontal or vertical destroyer</>
    }
}

export default Destroyer