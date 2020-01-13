import React from "react";
import { Spinner } from "../";
import { withAsyncAction } from "../../HOCs";
import { Redirect } from "../";
import { connect } from "react-redux";
import {
  // deleteMessage,
  getOldMessages,
  startGame,
  login
} from "../../../redux/actionCreators";
import { WaitScreen } from "../waitScreen";

class JoinGameForm extends React.Component {
  state = {
    value: "",
    goToSetup: false,
    loginData: {},
    lookingForMatch: false,
    message: "Searching for your game...",
    hasStartedGame: false
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleJoin = e => {
    e.preventDefault();
    console.log("handleJoin has started");
    this.props.login({ username: "playerB", password: "playerB" });
    console.log("handleJoin says we have logged in as player B");
    this.setState({ lookingForMatch: true });
    console.log("handleJoin set state of lookingForMatch: true");
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
    console.log("waitToBeLoggedIn started");
    if (this.state.hasStartedGame === false) {
      this.props.startGame(this.state.value, this.props.token);
      console.log("waitToBeLoggedIn ran startGame");
      this.setState({ hasStartedGame: true });
    }
    if (this.props.token) {
      console.log("waitToBeLoggedIn detected a token");
      this.checkGameNumber();
      console.log("waitToBeLoggedIn ran checkGameNumber()");
      return true;
    } else {
      return false;
    }
  };

  // deleteOldMessages = () => {
  //   this.props.getOldMessages("playerB").then(result => {
  //     result.payload.messages.map(message =>
  //       this.props.deleteMessage(message.id)
  //     );
  //   });
  // };

  // generateLoginData = () => {
  //   return this.setState({
  //     loginData: { username: "playerB", password: "playerB" }
  //   });
  // };

  checkGameNumber = () => {
    console.log("starting function 'this.checkGameNumber'");
    this.props
      .getOldMessages("playerA")
      //=====================================
      //stopping point for janell:
      // i'm doing this map (below) incorrectly
      //==================================
      .then(result => {
        console.log(result.payload.messages);
        console.log("looking for game# " + this.state.value);
        let matchingMessage = result.payload.messages.map(message => {
          if (message.text === "Game " + this.state.value + " start") {
            console.log(
              message.text + " says that we have a message with the game number"
            );
            if (message.username === "playerA") {
              console.log("and it is from playerA");
              console.log("game number matches");
              this.setState({ goToSetup: true });
              console.log("gotosetup is now true");
            }
          }
          return matchingMessage;
        });
      })
      .then(result => {
        console.log(result);
        if (result) {
          console.log("match found");
        } else {
          console.log("no match found");
        }
      });
  };

  render() {
    const { loading, error } = this.props;
    if (this.state.goToSetup === true) {
      return <Redirect to="/setup" />;
    }
    return (
      <React.Fragment>
        {this.state.lookingForMatch && (
          <WaitScreen message={this.state.message} />
        )}

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
  // deleteMessage,
  getOldMessages,
  startGame,
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("auth", "login")(JoinGameForm));
