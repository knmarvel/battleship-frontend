import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as auth from "./auth";
import * as setUpGame from "./setUpGame";
import * as welcome from "./welcome";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: combineReducers(auth),
    setUpGame: combineReducers(setUpGame),
    welcome: combineReducers(welcome)
  });
