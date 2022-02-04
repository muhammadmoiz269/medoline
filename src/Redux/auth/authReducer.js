import { SET_USER, REMOVE_USER } from "./authConstants";

var initialstate = null;
var authReducers = (state = initialstate, action) => {
  var { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload.user;

    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};
export default authReducers;
