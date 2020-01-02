import React from "react";
import { Welcome } from "../components";
// import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <Menu /> */}
        <h2>Welcome to Battleship!</h2>
        <Welcome />
      </>
    );
  }
}

export default Home;
