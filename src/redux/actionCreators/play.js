import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { FIRETORPEDO } from "../actionTypes";
const url = domain + "/play";

export const FireTorpedo = messageData => dispatch => {
    return dispatch({
        type: FIRETORPEDO.SUCCESS,
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