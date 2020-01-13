import { GETOLDMESSAGES } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const getOldMessages = (state = initialState, action) => {
  switch (action.type) {
    case GETOLDMESSAGES.SUCCESS:
      return { ...state, result: action.payload };

    default:
      return state;
  }
};

export default withAsyncReducer(GETOLDMESSAGES, getOldMessages);
