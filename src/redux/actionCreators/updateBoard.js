import { UPDATEBOARD } from "../actionTypes";

export const updateBoard = (
  player,
  coordinates,
  shipName,
  torpedo
) => dispatch => {
  if (shipName === null) {
    return dispatch({
      type: UPDATEBOARD.SUCCESS,
      payload: { player, coordinates, torpedo }
    });
  }
  return dispatch({
    type: UPDATEBOARD.SUCCESS,
    payload: { player, coordinates, shipName, torpedo }
  });
};

// updateBoard("A1", null, true);

// updateBoard("A1", shipName, false);
