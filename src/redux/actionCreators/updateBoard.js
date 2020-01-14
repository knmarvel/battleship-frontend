import { UPDATEBOARD } from "../actionTypes";
import { boards } from "../../react/components/setUpBoard/whereDoTheShipsLive"

export const startBoard = 

export const updateBoard = (player, coordinates, shipName, torpedo) => dispatch => {

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

