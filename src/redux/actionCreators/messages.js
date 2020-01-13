// post a single message.  text: XXXX + words/message, where XXXX = game number
import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  POSTMESSAGE,
  FETCHLASTMESSAGE,
  DELETELASTTORPEDOMESSAGE
} from "../actionTypes";

const url = domain + "/messages";

//battleship-capstone-api.herokuapp.com/messages

export const postMessage = messageData => dispatch => {
  dispatch({
    type: POSTMESSAGE.START
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
        type: POSTMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTMESSAGE.FAIL, payload: err }));
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

export const deleteLastTorpedoMessage = messageId => dispatch => {
  dispatch({
    type: DELETELASTTORPEDOMESSAGE.START
  });
  const token = JSON.parse(localStorage.login).result.token;
  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { ...jsonHeaders, Authorization: "Bearer " + token }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETELASTTORPEDOMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: DELETELASTTORPEDOMESSAGE.FAIL, payload: err })
      );
    });
};
