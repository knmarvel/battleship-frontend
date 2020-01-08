import React from "react";
import { Welcome } from "../components";
import { Menu } from "../components";
import "./CssVariables.css";
import "./Home.css";
// import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
         <h1>Battleship Game</h1>
        <Menu />
       {/* <h3>A Front-End Design Capstone Project</h3> */}
        <Welcome />
      </div>
    );
  }
}

export default Home;
