//PLACESHIP  is working

// placeShip action creator
import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { PLACESHIP, SELECTSHIP, FETCHLASTMESSAGE } from "../actionTypes";

const url = domain + "/messages";

//battleship-capstone-api.herokuapp.com/messages

export const placeShip = messageData => dispatch => {
  console.log(messageData)
  return dispatch({
    type: PLACESHIP.SUCCESS,
    payload: messageData
  });
};

export const selectShip = messageData => dispatch => {
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
