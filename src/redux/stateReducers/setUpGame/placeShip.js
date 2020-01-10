//placeShip state reducer (working)
import { PLACESHIP } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null,
  battleship: null,
  carrier: null,
  cruiser: null,
  destroyer: null,
  submarine: null,
};

const getInitStateFromStorage = (key, initialState) => {
  const storedState = JSON.parse(localStorage.getItem(key));

  if (storedState) {
    const unchangedInitialStateProps =
      Object.keys(storedState).every(
        property => initialState[property] !== undefined
      ) &&
      Object.keys(initialState).every(
        property => storedState[property] !== undefined
      );
    if (unchangedInitialStateProps) {
      return storedState;
    }
  }
  return initialState;
};

const placeShip = (
  state = getInitStateFromStorage("placeShip", initialState),
  action
) => {
  switch (action.type) {
    case PLACESHIP.SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};

export default withAsyncReducer(PLACESHIP, placeShip);
