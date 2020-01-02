import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { STARTGAME } from "../actionTypes";

const url = domain + "/messages";

export const startGame = gameNumber => dispatch => {
  dispatch({
    type: STARTGAME.START
  });
  const token = JSON.parse(localStorage.login).result.token;
  console.log("posting a start game message for game # " + gameNumber);

  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: "Bearer " + token },
    body: JSON.stringify({ text: "Game " + gameNumber + " start" })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: STARTGAME.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: STARTGAME.FAIL, payload: err }));
    });
};
