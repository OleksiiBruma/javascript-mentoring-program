import { SET_FILTER_TERM } from "../actions/actionTypes";

export default (state = "", { type, payload }) => {
  switch (type) {
    case SET_FILTER_TERM:
      return payload;
    default:
      return state;
  }
};
