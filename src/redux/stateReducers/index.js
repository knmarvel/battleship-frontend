import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as auth from "./auth";
import * as setUpGame from "./setUpGame";
import * as play from "./play";
import * as welcome from "./welcome";
import * as waitScreen from "./waitScreen";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: combineReducers(auth),
    setUpGame: combineReducers(setUpGame),
    play: combineReducers(play),
    welcome: combineReducers(welcome),
    waitScreen: combineReducers(waitScreen)
  });
