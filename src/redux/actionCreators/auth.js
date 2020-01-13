import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { LOGIN, LOGOUT } from "../actionTypes";
// import { startGame } from ".";

const url = domain + "/auth";

export const login = loginData => dispatch => {
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

// export const login = (gameNumber, loginData) => dispatch => {
//   return dispatch(_login(loginData)).then(() => {
//     console.log("player should be logged in as " + loginData.username);
//     return dispatch(startGame(gameNumber));
//   });
// };

export const logout = token => (dispatch, getState) => {
  dispatch({
    type: LOGOUT.START
  });

  // const token = getState().auth.login.result.token;

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
      if (err.statusCode === 401) {
        return dispatch({
          type: LOGOUT.SUCCESS,
          payload: { statusCode: 200 }
        });
      }
      return Promise.reject(
        dispatch({ type: LOGOUT.FAIL, payload: err.message })
      );
    });
};
