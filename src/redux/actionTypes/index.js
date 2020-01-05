const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");

//action types related to setUpGame

export const PLACESHIP = createActionTypes("PLACESHIP");

//action types related to welcome

export const STARTGAME = createActionTypes("STARTGAME");
export const VERIFYJOIN = createActionTypes("VERIFYJOIN");

//action types related to the waiting/memo screens

export const CHECKREADY = createActionTypes("CHECKREADY");
