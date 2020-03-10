import { AUTHORS_SUCCESS } from "../actions/actionTypes";
import { List } from 'immutable';  
export default (state = List([]), { type, payload }) => {
  switch (type) {
    case AUTHORS_SUCCESS:
      return List(payload);
    default:
      return state;
  }
};
