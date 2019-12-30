//this button shows up on the orientation popup, next to the
//confirm orientation button, and is used to rotate a ship 
//during initial setup. 
//suggest you use "mapStateToProps" to get the information
//and "connect" along with "withAsynchAction" when exporting

import React from "react"

class RotationButton extends React.Component {

handleClick = () => {
    console.log("RotationButton was clicked.")
    //determine what ship we are currently looking at

    //toggle that ship's orientation (in state) between either
    //"horizontal" or "vertical"

    //redraw the ship on the orientation popup

}

render () {
    return <button onClick = {this.handleClick}>Rotate Ship</button>
}

}

export default RotationButton