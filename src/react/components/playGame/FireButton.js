import React from "react";

class FireButton extends React.Component {
    FireTorpedo = event => {
        
        console.log("Torpedo Fired!");
    };

    render() {
        return <button onClick={this.FireTorpedo} style={{backgroundColor:"red", borderRadius:".5em"}}>Fire Torpedo!</button>;
    }
}

export default FireButton;
