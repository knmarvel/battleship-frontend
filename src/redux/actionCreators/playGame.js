import { OPPONENTTORPEDOCOORDINATES } from "../actionTypes";

export const opponentTorpedoCoordinates = coordinates => dispatch => {
  console.log(coordinates);
  return dispatch({
    type: OPPONENTTORPEDOCOORDINATES.SUCCESS,
    payload: coordinates
  });
};
