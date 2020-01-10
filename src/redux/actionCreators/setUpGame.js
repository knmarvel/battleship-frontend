//PLACESHIP  is working

// placeShip action creator
import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { PLACESHIP, SELECTSHIP, FETCHLASTMESSAGE } from "../actionTypes";

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
  console.log(messageData)
  return dispatch({
        type: SELECTSHIP.SUCCESS,
        payload: messageData
      });
};

export const fetchLastMessage = playerName => dispatch => {
  dispatch({
    type: FETCHLASTMESSAGE.START
  });
  return fetch(url + `?limit=1&offset=0&username=` + playerName, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: FETCHLASTMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: FETCHLASTMESSAGE.FAIL, payload: err })
      );
    });
};
