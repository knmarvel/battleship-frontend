import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  PLACEBATTLESHIP,
  PLACECARRIER,
  PLACECRUISER,
  PLACEDESTROYER,
  PLACESUBMARINE,
  SELECTSHIP,
  POSTCOORDINATESMESSAGE
} from "../actionTypes";

const url = domain + "/messages";

//battleship-capstone-api.herokuapp.com/messages

export const placeBattleship = messageData => dispatch => {
  return dispatch({
    type: PLACEBATTLESHIP.SUCCESS,
    payload: messageData
  });
};

export const placeCarrier = messageData => dispatch => {
  return dispatch({
    type: PLACECARRIER.SUCCESS,
    payload: messageData
  });
};

export const placeCruiser = messageData => dispatch => {
  return dispatch({
    type: PLACECRUISER.SUCCESS,
    payload: messageData
  });
};

export const placeDestroyer = messageData => dispatch => {
  return dispatch({
    type: PLACEDESTROYER.SUCCESS,
    payload: messageData
  });
};

export const placeSubmarine = messageData => dispatch => {
  return dispatch({
    type: PLACESUBMARINE.SUCCESS,
    payload: messageData
  });
};

export const selectShip = messageData => dispatch => {
  return dispatch({
    type: SELECTSHIP.SUCCESS,
    payload: messageData
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
