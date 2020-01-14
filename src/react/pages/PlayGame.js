//this page is where the game is played, once the setup is complete

import React from "react";
import { Menu } from "../components";
import "./PlayGame.css";
import {
  OpponentBoard,
  PlayerBoard,
  SurrenderButton,
  FireButton,
  TurnHandler
} from "../components/playGame";

class PlayGame extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <TurnHandler />
        <div className="twoBoards">
          <PlayerBoard />
          <OpponentBoard />
        </div>
        <SurrenderButton />
        <FireButton />
      </React.Fragment>
    );
  }
}
const mapStateToProps = {
  
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);
