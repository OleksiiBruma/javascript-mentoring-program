import {
  resetError,
  loadCoursesError,
  showLoader,
  hideLoader,
  deleteCourseError,
  addCourseError
} from "../actions";
import {
  LOAD_COURSES_SUCCESS,
  DELETE_COURSE_SUCCESS,
  ADD_COURSE_SUCCESS
} from "../constants";
import {
  getCoursesAPI,
  deleteCourseByIdAPI,
  addCourseAPI,
  editCourseAPI
} from "../api";

export const addCourseSuccess = payload => ({
  type: ADD_COURSE_SUCCESS,
  payload
});

export const loadCoursesSuccess = payload => ({
  type: LOAD_COURSES_SUCCESS,
  payload
});
export const deleteCourseSuccess = payload => ({
  type: DELETE_COURSE_SUCCESS,
  payload
});

export const loadCourses = () => async dispatch => {
  dispatch(resetError());
  dispatch(showLoader());
  try {
    const response = await getCoursesAPI();
    if (!response.ok) {
      throw new Error("Cannot load courses, please try again");
    }

    const courses = await response.json();
    dispatch(loadCoursesSuccess(courses));
    dispatch(hideLoader());
  } catch (error) {
    dispatch(loadCoursesError(error.message));
    dispatch(hideLoader());
  }
};

export const deleteCourseById = id => async dispatch => {
  dispatch(resetError());
  dispatch(showLoader());
  try {
    const response = await deleteCourseByIdAPI(id);
    if (!response.ok) {
      throw new Error("Cannot delete courses");
    }
    dispatch(deleteCourseSuccess(id));
    dispatch(hideLoader());
  } catch (error) {
    dispatch(deleteCourseError(error.message));
    dispatch(hideLoader());
  }
};

export const addCourse = payload => async dispatch => {
  const { body, history } = payload;
  dispatch(resetError());
  dispatch(showLoader());
  try {
    const response = await addCourseAPI(body);
    if (!response.ok) {
      throw new Error("Cannot add new course, please try again");
    }
    const newCourse = await response.json();
    dispatch(addCourseSuccess(newCourse));
    dispatch(hideLoader());
    history.push("/courses");
  } catch (error) {
    dispatch(addCourseError(error.message));
    dispatch(hideLoader());
  }
};

export const editCourse = payload => async dispatch => {
  const { body, history, id } = payload;
  dispatch(showLoader());
  dispatch(resetError());
  try {
    const response = await editCourseAPI({ body, id });
    const courseId = await response.json();
    if (!courseId) {
      throw new Error("Unable to edit course, please try again");
    }
    dispatch(hideLoader());
    history.push("/courses");
  } catch (error) {
    dispatch(hideLoader());
  }
};
