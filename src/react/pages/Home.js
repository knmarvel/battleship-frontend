import React from "react";
import { Welcome } from "../components";
import { Menu } from "../components";
import "./CssVariables.css";
import "./Home.css";
import { connect } from "../HOCs"
import { startBoard } from "../../redux/index"
import boards from "../components/setUpBoard/whereDoTheShipsLive"

class Home extends React.Component {
  handleClick = () => {
    this.props.startBoard(boards)
  }
  render() {
    return (
      <div className="homePage">
        <h1>Battleships</h1>
        
        <Menu />
        <Welcome />
        <button onClick={this.handleClick} >BUTTON BUTTON BUTTON </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  startBoard
}

export default connect (null, mapDispatchToProps) (Home);
