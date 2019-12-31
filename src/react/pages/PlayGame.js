//this page is where the game is played, once the setup is complete

import React from "react";
import { Menu } from "../components";
import "./PlayGame.css";
import {
  OpponentBoard,
  PlayerBoard,
  SurrenderButton,
  TurnHandler
} from "../components/playGame";

class PlayGame extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <TurnHandler />
        <PlayerBoard />
        <OpponentBoard />
        <SurrenderButton />
      </React.Fragment>
    );
  }
}

export default PlayGame;
