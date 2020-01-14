import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { FIRETORPEDO, ADDCOORDINATES, TORPEDOHIT } from "../actionTypes";
const url = domain + "/messages";

export const addCoordinates = messageData => dispatch => {
    return dispatch({
        type: ADDCOORDINATES.SUCCESS,
        payload: messageData
    });
};

export const fireTorpedo = messageBody => (dispatch, getState) => {
    dispatch({
        type: FIRETORPEDO.START
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
                type: FIRETORPEDO.SUCCESS,
                payload: result
            });
        })
        .catch(err => {
            if (err.statusCode === 401) {
                return dispatch({
                    type: FIRETORPEDO.SUCCESS,
                    payload: { statusCode: 200 }
                });
            }
            return Promise.reject(
                dispatch({ type: FIRETORPEDO.FAIL, payload: err.message })
            );
        });
};


export const torpedoHit = messageId => (dispatch, getState) => {
    dispatch({
      type: TORPEDOHIT.START
    });
  
    const token = getState().auth.login.result.token;
  
    return fetch(domain + "/likes", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, ...jsonHeaders },
      body: JSON.stringify({ messageId })
    })
      .then(handleJsonResponse)
      .then(result => {
        return dispatch({
          type: TORPEDOHIT.SUCCESS,
          payload: result
        });
      })
      .catch(err => {
        return Promise.reject(dispatch({ type: TORPEDOHIT.FAIL, payload: err }));
      });
  };
