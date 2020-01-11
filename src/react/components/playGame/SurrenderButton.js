import React from "react";
import "react-confirm-alert/src/react-confirm-alert.css";

class SurrenderButton extends React.Component {
  onConfirm = () => {
    console.log("player surrendered");
    //====================================================================
    //janell says: stopping point: need to
    //post "XXXX surrender" and add checking for "surrender" to andrew's part
    //when we're looking for incoming torpedos
    //=================================================================
    var goHome = window.confirm("Click OK to be redirected to the home page.");
    if (goHome) {
      window.location.href = "/";
    }
  };
  onCancel = () => {
    console.log("player continues fighting");
  };

  confirmAlert = () => {
    console.log("surrender button clicked");

    window.confirm("Do You Really Want To Surrender?")
      ? this.onConfirm()
      : this.onCancel();
  };

  render() {
    return <button onClick={this.confirmAlert}>I Give Up!</button>;
  }
}

export default SurrenderButton;
