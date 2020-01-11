import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { CHECKREADYSTART } from "../actionTypes";

const url = domain + "/messages";

export const checkReadyStart = () => dispatch => {
  dispatch({
    type: CHECKREADYSTART.START //yes, it's checkreadystart.start
  });

  return fetch(url + "?limit=2&offset=0", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CHECKREADYSTART.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CHECKREADYSTART.FAIL, payload: err })
      );
    });
};
