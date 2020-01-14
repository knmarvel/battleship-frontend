import { UPDATEBOARD } from "../actionTypes";

export const updateBoard = (player, coordinates, shipName, torpedo) => dispatch => {
    if(shipName===null){
        return dispatch({
            type: UPDATEBOARD.SUCCESS,
            payload: 
          }});
    }
  return dispatch({
    type: UPDATEBOARD.SUCCESS,
    payload: {
        coordinates = {
            "ship": shipName,
            "torpedo": torpedo
        }
  }});
};

updateBoard("A1", null, true)

updateBoard("A1", shipName, false)

