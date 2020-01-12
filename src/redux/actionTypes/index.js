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
export const GETGAMENUMBER = createActionTypes("GETGAMENUMBER");

//action types related to setUpGame

export const PLACEBATTLESHIP = createActionTypes("PLACEBATTLESHIP");
export const PLACECARRIER = createActionTypes("PLACECARRIER");
export const PLACECRUISER = createActionTypes("PLACECRUISER");
export const PLACEDESTROYER = createActionTypes("PLACEDESTROYER");
export const PLACESUBMARINE = createActionTypes("PLACESUBMARINE");
export const SELECTSHIP = createActionTypes("SELECTSHIP");
export const FETCHLASTMESSAGE = createActionTypes("FETCHLASTMESSAGE");
export const POSTCOORDINATESMESSAGE = createActionTypes(
  "POSTCOORDINATESMESSAGE"
);

//action types related to welcome

export const STARTGAME = createActionTypes("STARTGAME");
export const VERIFYJOIN = createActionTypes("VERIFYJOIN");

//action types related to the waiting/memo screens

export const CHECKREADYSTART = createActionTypes("CHECKREADYSTART");
export const POSTMESSAGE = createActionTypes("POSTMESSAGE");
