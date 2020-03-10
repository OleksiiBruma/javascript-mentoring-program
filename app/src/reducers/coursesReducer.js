import {
  LOAD_COURSES_SUCCESS,
  DELETE_COURSE_SUCCESS
} from "../constants/actionTypes";
import { List } from "immutable";
export default (state =  List([]), { type, payload }) => {
  switch (type) {
    case LOAD_COURSES_SUCCESS:
      return List(payload);
    case DELETE_COURSE_SUCCESS:
      return state.filter(course => course.id !== payload);
    default:
      return state;
  }
};
