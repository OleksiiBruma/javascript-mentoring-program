import {
  DELETE_COURSE_ERROR,
  LOGIN_ERROR,
  LOAD_COURSES_ERROR,
  AUTHORS_ERROR,
  RESET_ERROR,
  ADD_COURSE_ERROR
} from "../constants";
export const addCourseError = payload => ({
  type: ADD_COURSE_ERROR,
  payload
});

export const deleteCourseError = payload => ({
  type: DELETE_COURSE_ERROR,
  payload
});
export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload
});
export const loadCoursesError = payload => ({
  type: LOAD_COURSES_ERROR,
  payload
});
export const authorsError = payload => ({
  type: AUTHORS_ERROR,
  payload
});
export const resetError = () => ({ type: RESET_ERROR });
