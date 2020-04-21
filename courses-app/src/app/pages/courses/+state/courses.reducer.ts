import { createReducer, on } from "@ngrx/store";
import { initialCoursesState } from "./courses.state";
import {
  loadCoursesSuccess,
  loadCoursesFailure,
  deleteCourseSuccess,
  deleteCourseFailure,
  updateCourseSuccess,
  updateCourseFailure,
  createCourseSuccess,
  createCourseFailure,
  setFilterTerm,
  setCurrentCourseSuccess,
  setCurrentCourseFailure,
  setPageType,
  resetError
} from "./courses.actions";

export const coursesReducers = createReducer(
  initialCoursesState,
  on(loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses: courses
  })),
  on(loadCoursesFailure, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(deleteCourseSuccess, (state, { id }) => ({
    ...state,
    courses: state.courses.filter(course => course.id !== id)
  })),
  on(deleteCourseFailure, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(updateCourseSuccess, (state, { course }) => ({
    ...state,
    courses: state.courses.filter(oldCourse =>
      oldCourse.id === course.id ? course : oldCourse
    )
  })),
  on(updateCourseFailure, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(createCourseSuccess, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course]
  })),
  on(createCourseFailure, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(setFilterTerm, (state, { query }) => ({
    ...state,
    filterTerm: query
  })),
  on(setCurrentCourseSuccess, (state, { course }) => ({
    ...state,
    currentCourse: course
  })),
  on(setCurrentCourseFailure, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(setPageType, (state, { pageType }) => ({
    ...state,
    pageType: pageType
  })),
  on(resetError, state => ({
    ...state,
    error: null
  }))
);
