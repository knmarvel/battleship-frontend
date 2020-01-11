import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  PLACEBATTLESHIP,
  PLACECARRIER,
  PLACECRUISER,
  PLACEDESTROYER,
  PLACESUBMARINE,
  SELECTSHIP,
  FETCHLASTMESSAGE,
  POSTCOORDINATESMESSAGE
} from "../actionTypes";

const url = domain + "/messages";

//battleship-capstone-api.herokuapp.com/messages

export const placeBattleship = messageData => dispatch => {
  console.log(messageData);
  return dispatch({
    type: PLACEBATTLESHIP.SUCCESS,
    payload: messageData
  });
};

export const placeCarrier = messageData => dispatch => {
  console.log(messageData);
  return dispatch({
    type: PLACECARRIER.SUCCESS,
    payload: messageData
  });
};

export const placeCruiser = messageData => dispatch => {
  console.log(messageData);
  return dispatch({
    type: PLACECRUISER.SUCCESS,
    payload: messageData
  });
};

export const placeDestroyer = messageData => dispatch => {
  console.log(messageData);
  return dispatch({
    type: PLACEDESTROYER.SUCCESS,
    payload: messageData
  });
};

export const placeSubmarine = messageData => dispatch => {
  console.log(messageData);
  return dispatch({
    type: PLACESUBMARINE.SUCCESS,
    payload: messageData
  });
};

export const selectShip = messageData => dispatch => {
  console.log(messageData);
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

export const postCoordinatesMessage = messageBody => (dispatch, getState) => {
  dispatch({
    type: POSTCOORDINATESMESSAGE.START
  });
  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(messageBody)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTCOORDINATESMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      if (err.statusCode === 401) {
        return dispatch({
          type: POSTCOORDINATESMESSAGE.SUCCESS,
          payload: { statusCode: 200 }
        });
      }
      return Promise.reject(
        dispatch({ type: POSTCOORDINATESMESSAGE.FAIL, payload: err.message })
      );
    });
};
