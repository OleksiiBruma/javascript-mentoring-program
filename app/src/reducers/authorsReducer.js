import { AUTHORS_SUCCESS } from "../actions/actionTypes";

export default (state = [], { type, payload }) => {
  switch (type) {
    case AUTHORS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
