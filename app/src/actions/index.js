import {
  LOAD_COURSES_SUCCESS,
  LOAD_COURSES_ERROR,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  RESET_ERROR,
  SET_FILTER_TERM,
  AUTHORS_SUCCESS,
  AUTHORS_ERROR
} from "./actionTypes";

import {
  deleteCourseByIdAPI,
  getCoursesAPI,
  loginAPI,
  saveLoginStateAPI,
  logoutAPI,
  getAuthorsAPI,
  addCourseAPI,
  editCourseAPI
} from "../api";

export const loadCoursesSuccess = payload => ({
  type: LOAD_COURSES_SUCCESS,
  payload
});
export const loadCoursesError = payload => ({
  type: LOAD_COURSES_ERROR,
  payload
});
export const deleteCourseSuccess = payload => ({
  type: DELETE_COURSE_SUCCESS,
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
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});
export const logoutSuccess = payload => ({
  type: LOGOUT_SUCCESS,
  payload
});
export const setFilterTerm = payload => ({
  type: SET_FILTER_TERM,
  payload
})
export const authorsSuccess = payload => ({
  type: AUTHORS_SUCCESS,
  payload
});
export const authorsError = payload => ({
  type: AUTHORS_ERROR,
  payload
});
export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const resetError = () => ({ type: RESET_ERROR });

export const loadCourses = () => async dispatch => {
  dispatch(resetError());
  dispatch(showLoader());
  try {
    const response = await getCoursesAPI();
    const courses = await response.json();
    dispatch(loadCoursesSuccess(courses));
    dispatch(hideLoader());
  } catch (error) {
    dispatch(loadCoursesError(error));
    dispatch(hideLoader());
  }
};
export const deleteCourseById = id => async dispatch => {
  dispatch(resetError());
  dispatch(showLoader());
  try {
    const response = await deleteCourseByIdAPI(id);
    if (!response) {
      return;
    }
    dispatch(deleteCourseSuccess(id));
    dispatch(hideLoader());
  } catch (error) {
    dispatch(deleteCourseError(error));
    dispatch(hideLoader());
  }
};

export const login = payload => async dispatch => {
  dispatch(resetError());
  dispatch(showLoader());
  const { credentials, history } = payload;
  try {
    const response = await loginAPI(credentials);
    if (!response.ok) {
      throw new Error("Incorrect credentials, please try again");
    }
    saveLoginStateAPI();
    dispatch(loginSuccess());
    dispatch(hideLoader());
    history.push("/courses");
  } catch (error) {
    dispatch(loginError(error.message));
    dispatch(hideLoader());
  }
};

export const logout = payload => async dispatch => {
  dispatch(showLoader());
  dispatch(resetError());
  const { history } = payload;
  logoutAPI();
  dispatch(logoutSuccess());
  dispatch(hideLoader());
  history.push("/login");
};
export const loadAuthors = () => async dispatch => {
  dispatch(showLoader());
  dispatch(resetError());
  try {
    const response = await getAuthorsAPI();
    const authors = await response.json();
    dispatch(authorsSuccess(authors));
    dispatch(hideLoader());
  } catch (error) {
    dispatch(authorsError(error.message));
    dispatch(hideLoader());
  }
};
export const addCourse = payload => async dispatch => {
  const { body, history } = payload;
  dispatch(showLoader());
  dispatch(resetError());
  try {
    const response = await addCourseAPI(body);
    const id = await response.json();
    if (!id) {
      throw new Error("Cannot add new course, please try again");
    }
    history.push("/courses");
  } catch (error) {
    dispatch(hideLoader());
  }
};

export const editCourse = payload => async dispatch => {
  const { body, history, id } = payload;
  dispatch(showLoader());
  dispatch(resetError());
  try {
    const response = await editCourseAPI({body, id});
    const courseId = await response.json();
    if(!courseId){
      throw new Error('Unable to edit course, please try again')
    }
    history.push("/courses");
  } catch (error) {
    dispatch(hideLoader());
  }
};
