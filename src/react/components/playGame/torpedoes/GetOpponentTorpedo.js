import React from "react";
import { connect, withAsyncAction } from "../../../HOCs";
import { fetchLastMessage } from "../../../../redux/index";

class GetOpponentTorpedo extends React.Component {
  state = {
    opponentName: "",
    torpedoCoordinates: ""
  };

  componentDidMount = () => {
    this.determineOpponentName();
  };

  determineOpponentName = () => {
    if (this.props.playerName === "playerA") {
      this.setState({ opponentName: "playerB" });
    } else if (this.props.playerName === "playerB") {
      this.setState({ opponentName: "playerA" });
    } else {
      console.log(
        "cannot set opponent name because playername is not playerA or playerB"
      );
    }
  };

  getOpponentTorpedoMessage = () => {
    this.props.fetchLastMessage(this.state.opponentName).then(result => {
      result.payload.messages.map(message => {
        if (message.text.includes("torpedo")) {
          console.log(message.text);
          this.setState({ torpedoCoordinates: message.text });
        }
      });
    });
  };

  handleClickForMessage = () => {
    this.getOpponentTorpedoMessage();
  };

  handleClickForState = () => {
    this.props.opponentTorpedoCoordinates({
      coordinates: this.state.torpedoCoordinates
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClickForMessage}>
          Get the coordinates
        </button>
        <button onClick={this.handleClickForState}>Send them to state!</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerName: state.auth.login.result.username
  };
};
const mapDispatchToProps = { fetchLastMessage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withAsyncAction("playGame", "opponentTorpedoCoordinates")(GetOpponentTorpedo)
);
