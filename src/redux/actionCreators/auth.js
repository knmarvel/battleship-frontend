import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { LOGIN, LOGOUT, GETGAMENUMBER } from "../actionTypes";
import { startGame } from ".";

const url = domain + "/auth";

export const _login = loginData => dispatch => {
  dispatch({
    type: LOGIN.START
  });

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: LOGIN.FAIL, payload: err }));
    });
};

export const login = (gameNumber, loginData) => dispatch => {
  return dispatch(_login(loginData)).then(() => {
    console.log("player should be logged in as " + loginData.username);
    return dispatch(startGame(gameNumber));
  });
};

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/logout", {
    method: "GET",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGOUT.FAIL, payload: err.message })
      );
    });
};

export const getGameNumber = gameNumber => dispatch => {
  console.log(gameNumber);
  return dispatch({
    type: GETGAMENUMBER.SUCCESS,
    payload: gameNumber
  });
};
