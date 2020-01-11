import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  CHECKWIN
} from "../actionTypes";

const url = domain + "/messages";

//battleship-capstone-api.herokuapp.com/messages

export const checkWin = (limit, offset, user) => dispatch => {
    dispatch({
      type: CHECKWIN.START
    });
    let urlString = url+`?limit=${limit}&offset=${offset}&username=${user}`
    if(user===null||user===undefined){
      urlString = url+`?limit=${limit}&offset=${offset}`
    }
  
    return fetch(urlString, {
      method: "GET",
      headers: jsonHeaders,
    })
      .then(handleJsonResponse)
      .then(result => {
        return dispatch({
          type: CHECKWIN.SUCCESS,
          payload: result
        });
      })
      .catch(err => {
        return Promise.reject(dispatch({ type: CHECKWIN.FAIL, payload: err }));
      });
  };