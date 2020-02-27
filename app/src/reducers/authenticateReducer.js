import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/actionTypes";
import { isLoggedInAPI } from "../services";

export default (state = isLoggedInAPI, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};
