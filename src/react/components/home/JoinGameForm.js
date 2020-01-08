import React from "react";
import { Spinner } from "../";
import { withAsyncAction } from "../../HOCs";
import { Redirect } from "../";
import { connect } from "react-redux";
import { verifyJoin } from "../../../redux/actionCreators";

class JoinGameForm extends React.Component {
  state = {
    value: "",
    goToSetup: false,
    loginData: {}
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleJoin = e => {
    e.preventDefault();
    this.generateLoginData();
    this.checkGameNumber();
  };

  generateLoginData = () => {
    return this.setState({
      loginData: { username: "playerB", password: "playerB" }
    });
  };

  checkGameNumber = () => {
    this.props.verifyJoin().then(result => {
      if (
        result.payload.messages[0].text ===
        "Game " + this.state.value + " start"
      ) {
        console.log("game number matches");
        return this.props
          .login(this.state.value, this.state.loginData)
          .then(this.setState({ goToSetup: true }));
      } else return alert("wrong number");
    });
  };

  render() {
    const { loading, error } = this.props;
    if (this.state.goToSetup === true) {
      return <Redirect to="/setup" />
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

// const mapStateToProps = state => {
//   return {
//     //example  --- selectedShip: state.selectedShip
//   };
// };

const mapDispatchToProps = { verifyJoin };
export default connect(
  null,
  mapDispatchToProps
)(withAsyncAction("auth", "login")(JoinGameForm));
