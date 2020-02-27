import { LOGIN_ERROR, RESET_ERROR, LOAD_COURSES_ERROR } from "../actions/actionTypes";

export default (state = null, { type, payload }) => {
  switch (type) {
    case LOGIN_ERROR:
      return payload;
      case LOAD_COURSES_ERROR:
          return "Cannot get courses, please try again"
    case RESET_ERROR:
      return "";
    default:
      return state;
  }
};
