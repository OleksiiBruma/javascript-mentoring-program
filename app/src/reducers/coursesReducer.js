import {
  LOAD_COURSES_SUCCESS,
  DELETE_COURSE_SUCCESS,
  SEARCH_COURSES,
  LOAD_EDIT_COURSE_SUCCESS,
  RESET_EDIT_COURSE
} from "../actions/actionTypes";

export default (
  state = {
    all: [],
    visible: [],
    filtered: false,
    editCourse: { name: "new" }
  },
  { type, payload }
) => {
  switch (type) {
    case LOAD_EDIT_COURSE_SUCCESS:
      return { ...state, editCourse: payload };
    case LOAD_COURSES_SUCCESS:
      return { ...state, all: payload };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        visible: [...state.visible.filter(course => course.id !== payload)],
        all: [...state.all.filter(course => course.id !== payload)]
      };
    case SEARCH_COURSES:
      if (!payload) {
        return { ...state, filtered: false };
      }
      return {
        ...state,
        filtered: true,
        visible: state.all.filter(course => course.name.includes(payload))
      };
      case RESET_EDIT_COURSE:
        return { ...state, editCourse: { name: "new" }};
    default:
      return state;
  }
};
