import { createSelector } from "reselect";

const getFilterTerm = state => state.filterTerm;
const getCourses = state => state.courses;

export const getVisibleCourses = createSelector(
  [getFilterTerm, getCourses],
  (filterTerm, courses) => {
    return filterTerm
      ? courses.filter(course => course.name.includes(filterTerm)).toJS()
      : courses.toJS();
  }
);
