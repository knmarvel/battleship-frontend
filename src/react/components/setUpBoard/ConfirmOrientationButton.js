//this button shows up on the orientation popup, next to the
//rotate button, and is used to set the orientation of ships 
//during initial setup. 

import React from "react"

class ConfirmOrientationButton extends React.Component {

handleClick = () => {
    console.log("ConfirmOrientationButton was clicked.")
//close the orientation popup window
}

render () {
    return <button onClick = {this.handleClick}>Confirm Orientation</button>
}
}

export default ConfirmOrientationButton