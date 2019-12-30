import React from "react";
import { LoginForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Welcome to Battleship!</h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
