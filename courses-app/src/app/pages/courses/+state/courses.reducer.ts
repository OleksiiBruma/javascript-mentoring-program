import { createReducer, on } from "@ngrx/store";
import { static as Immutable } from "seamless-immutable";
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
  Immutable.from(initialCoursesState),
  on(loadCoursesSuccess, (state, { courses }) =>
    Immutable.set(state, "courses", courses)
  ),
  on(loadCoursesFailure, (state, { error }) =>
    Immutable.set(state, "error", error)
  ),
  on(deleteCourseSuccess, (state, { id }) =>
    Immutable.set(
      state,
      "courses",
      state.courses.filter(course => course.id !== id)
    )
  ),
  on(deleteCourseFailure, (state, { error }) =>
    Immutable.set(state, "error", error)
  ),
  on(updateCourseSuccess, (state, { course }) =>
    Immutable.set(
      state,
      "courses",
      state.courses.filter(oldCourse =>
        oldCourse.id === course.id ? course : oldCourse
      )
    )
  ),
  on(updateCourseFailure, (state, { error }) =>
    Immutable.set(state, "error", error)
  ),
  on(createCourseSuccess, (state, { course }) =>
    Immutable.set(state, "courses", Immutable(state.courses).concat([course]))
  ),
  on(createCourseFailure, (state, { error }) =>
    Immutable.set(state, "error", error)
  ),
  on(setFilterTerm, (state, { query }) =>
    Immutable.set(state, "filterTerm", query)
  ),
  on(setCurrentCourseSuccess, (state, { course }) =>
    Immutable.set(state, "currentCourse", course)
  ),
  on(setCurrentCourseFailure, (state, { error }) =>
    Immutable.set(state, "error", error)
  ),
  on(setPageType, (state, { pageType }) =>
    Immutable.set(state, "pageType", pageType)
  ),
  on(resetError, state => Immutable.set(state, "error", null))
);
