import { AUTHORS_SUCCESS } from "../constants/actionTypes";
import { List } from 'immutable';  
export default (state = List([]), { type, payload }) => {
  switch (type) {
    case AUTHORS_SUCCESS:
      return List(payload);
    default:
      return state;
  }
};
