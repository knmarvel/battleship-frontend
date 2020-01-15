import React from "react";
import "./WaitScreen.css";
import { deleteMessage, getOldMessages } from "../../../redux/index";
import { connect, withAsyncAction } from "../../HOCs";

class WaitScreen extends React.Component {
  // deleteOldMessages = () => {
  //   this.props.getOldMessages(this.props.playerName).then(result => {
  //     result.payload.messages.map(message =>
  //       this.props.deleteMessage(message.id, this.props.token)
  //     );
  //   });
  // };

  render() {
    return (
      <div className="waitScreen">
        <p className="waitMessage">{this.props.message}</p>
        {/* <button onClick={this.deleteOldMessages}>deleteOldMessages</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login.result) {
    return {
      playerName: state.auth.login.result.username,
      token: state.auth.login.result.token
    };
  } else return {};
};

const mapDispatchToProps = {
  // checkReadyStart,
  deleteMessage,
  getOldMessages
  // startGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("auth", "login")(WaitScreen));

// export default WaitScreen;
