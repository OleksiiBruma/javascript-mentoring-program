import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ICoursesState } from "./courses.state";

const selectCourses = state => {
  return state["courses-module"];
};
export const selectVisibleCourses = createSelector(
  selectCourses,
  (state: ICoursesState) => {
    return state.courses.filter(course =>
      course.name.includes(state.filterTerm)
    );
  }
);
export const selectCurrentCourse = createSelector(
  selectCourses,
  (state: ICoursesState) => {
    return state.currentCourse;
  }
);
export const selectPageType = createSelector(
  selectCourses,
  (state: ICoursesState) => {
    return state.pageType;
  }
);
export const selectErrorMessage = createSelector(
  selectCourses,
  (state: ICoursesState) => {
    return state.error;
  }
);
