import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { CHECKREADY } from "../actionTypes";

const url = domain + "/messages";

export const checkReady = () => dispatch => {
  dispatch({
    type: CHECKREADY.START
  });

  return fetch(url + "?limit=2&offset=0", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CHECKREADY.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: CHECKREADY.FAIL, payload: err }));
    });
};
