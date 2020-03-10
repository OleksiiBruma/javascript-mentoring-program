import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/actionTypes";
import { isLoggedInAPI } from "../api";

export default (state = isLoggedInAPI, { type }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};
