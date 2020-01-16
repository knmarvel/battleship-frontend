import React from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import { connect } from "../../HOCs";
import { getOldMessages, deleteMessage } from "../../../redux/actionCreators";

class SurrenderButton extends React.Component {
  onConfirm = () => {
    // console.log("player surrendered");
    //====================================================================
    //janell says: stopping point: need to
    //post "XXXX surrender" and add checking for "surrender" to andrew's part
    //when we're looking for incoming torpedos
    //=================================================================

    // delete old messages function below:
    //
    //
    //  DELETE OLD MESSAGES DOES NOT ACTUALLY WORK TO DELETE ANYTHING
    //
    //
    //=================================================================

    var goHome = window.confirm("Click OK to be redirected to the home page.");
    if (goHome) {
      // console.log("deleting old messages");
      this.deleteOldMessages();
      // window.location.href = "/";
    }
  };

  deleteOldMessages = () => {
    this.props
      .getOldMessages(this.props.playerName)
      .then(result => {
        result.payload.messages.map(message =>
          this.props.deleteMessage(message.id, this.props.token)
        );
      })
      .then((window.location.href = "/"));
  };

  onCancel = () => {
    // console.log("player continues fighting");
  };

  confirmAlert = () => {
    // console.log("surrender button clicked");

    window.confirm("Do You Really Want To Surrender?")
      ? this.onConfirm()
      : this.onCancel();
  };

  render() {
    return <button onClick={this.confirmAlert}>I Give Up!</button>;
  }
}
const mapStateToProps = state => {
  return {
    playerName: state.auth.login.result.username,
    token: state.auth.login.result.token
  };
};

const mapDispatchToProps = {
  deleteMessage,
  getOldMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(SurrenderButton);
