import React from "react";
import { Welcome } from "../components";
import { Menu } from "../components";
import "./CssVariables.css";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
        <h1>Battleships</h1>
        <Menu />
        <Welcome />
      </div>
    );
  }
}

export default Home;
