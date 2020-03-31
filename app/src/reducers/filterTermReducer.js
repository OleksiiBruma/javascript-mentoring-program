import { SET_FILTER_TERM } from "../constants/actionTypes";

export default (state = "", { type, payload }) => {
  switch (type) {
    case SET_FILTER_TERM:
      return payload;
    default:
      return state;
  }
};
