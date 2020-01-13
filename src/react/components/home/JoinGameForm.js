import React from "react";
import { Spinner } from "../";
import { withAsyncAction } from "../../HOCs";
import { Redirect } from "../";
import { connect } from "react-redux";
import {
  verifyJoin,
  deleteMessage,
  getOldMessages,
  startGame,
  login
} from "../../../redux/actionCreators";

class JoinGameForm extends React.Component {
  state = {
    value: "",
    goToSetup: false,
    loginData: {}
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleJoin = e => {
    e.preventDefault();
    this.props.login({ username: "playerB", password: "playerB" });
    // setTimeout(function() {
    //   return true;
    // }, 20000);
    // this.deleteOldMessages();
    // setTimeout(function() {
    //   return true;
    // }, 20000);
    this.interval = setInterval(this.waitToBeLoggedIn, 5000);
  };

  waitToBeLoggedIn = () => {
    if (this.props.token) {
      this.props.startGame(this.state.value, this.props.token);
      this.checkGameNumber();
      return true;
    } else {
      return false;
    }
  };

  deleteOldMessages = () => {
    this.props.getOldMessages("playerB").then(result => {
      result.payload.messages.map(message =>
        this.props.deleteMessage(message.id)
      );
    });
  };

  // generateLoginData = () => {
  //   return this.setState({
  //     loginData: { username: "playerB", password: "playerB" }
  //   });
  // };

  checkGameNumber = () => {
    this.props.verifyJoin().then(
      //=====================================
      //stopping point for janell:
      // i'm doing this map (below) incorrectly
      //==================================
      (result.map(message) = () => {
        if (message.text === "Game " + this.state.gameNumber + " start") {
          if (message.username === "playerA") {
            console.log("game number matches");
            return this.setState({ goToSetup: true });
          }
        } else return alert("wrong number");
      })
    );
  };

  render() {
    const { loading, error } = this.props;
    if (this.state.goToSetup === true) {
      return <Redirect to="/setup" />;
    }
    return (
      <React.Fragment>
        <form id="login-form" onSubmit={this.handleJoin}>
          <button type="submit" disabled={loading}>
            Join Game
          </button>
          <input
            type="text"
            name="gameId"
            autoFocus
            required
            onChange={this.handleChange}
            placeholder="enter 4-digit game number"
          />
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login.result) {
    return {
      token: state.auth.login.result.token
    };
  } else return {};
};

const mapDispatchToProps = {
  verifyJoin,
  deleteMessage,
  getOldMessages,
  startGame,
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("auth", "login")(JoinGameForm));
