//PLACESHIP  is working

// placeShip action creator
import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { PLACESHIP, SELECTSHIP } from "../actionTypes";

const url = domain + "/messages";

//battleship-capstone-api.herokuapp.com/messages

export const placeShip = messageData => dispatch => {
  dispatch({
    type: PLACESHIP.START
  });

  const token = JSON.parse(localStorage.login).result.token;

  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: "Bearer " + token },
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: PLACESHIP.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: PLACESHIP.FAIL, payload: err }));
    });
};

export const selectShip = messageData => dispatch => {
  dispatch({
    type: SELECTSHIP.START
  });

  const token = JSON.parse(localStorage.login).result.token;

  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: "Bearer " + token },
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: SELECTSHIP.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: SELECTSHIP.FAIL, payload: err }));
    });
};
