import { createAction, props } from "@ngrx/store";
import { ICourse } from "src/app/models/course.model";

export const loadCourses = createAction("[Courses] Load Courses");

export const loadCoursesSuccess = createAction(
  "[Courses] Load Courses Success",
  props<{ courses: ICourse[] }>()
);

export const loadCoursesFailure = createAction(
  "[Courses] Load Courses Failure",
  props<{ error: string }>()
);

export const deleteCourse = createAction(
  "[Courses] Delete Course",
  props<{ id: string }>()
);
export const deleteCourseSuccess = createAction(
  "[Courses] Delete Course Success",
  props<{ id: string }>()
);
export const deleteCourseFailure = createAction(
  "[Courses] Delete Course Failure",
  props<{ error: string }>()
);
export const updateCourse = createAction(
  "[Courses] Update Course",
  props<{ course: ICourse }>()
);
export const updateCourseSuccess = createAction(
  "[Courses] Update Course Success",
  props<{ course: ICourse }>()
);
export const updateCourseFailure = createAction(
  "[Courses] Update Course Failure",
  props<{ error: string }>()
);
export const createCourse = createAction(
  "[Courses] Create Course",
  props<{ course: ICourse }>()
);
export const createCourseSuccess = createAction(
  "[Courses] Create Course Success",
  props<{ course: ICourse }>()
);
export const createCourseFailure = createAction(
  "[Courses] Create Course Failure",
  props<{ error: string }>()
);
export const setCurrentCourse = createAction("[Courses] Set current Course");
export const setCurrentCourseSuccess = createAction(
  "[Courses] Set current course Success",
  props<{ course: ICourse }>()
);
export const setCurrentCourseFailure = createAction(
  "[Courses] Set current course Failure",
  props<{ error: string }>()
);
export const setFilterTerm = createAction(
  "[Courses] Set filter term",
  props<{ query: string }>()
);
export const setPageType = createAction(
  "[Courses] Set page type",
  props<{ pageType: string }>()
);
export const saveCourse = createAction(
  "[Courses] Save course",
  props<{ course: ICourse }>()
);
export const saveNewCourse = createAction(
  "[Courses] Save new course",
  props<{ course: ICourse }>()
);
export const saveNewCourseSuccess = createAction(
  "[Courses] Save new course success",
  props<{ course: ICourse }>()
);
export const saveNewCourseFailure = createAction(
  "[Courses] Save new course failure",
  props<{ error: string }>()
);
export const resetError = createAction("[Courses] Reset error");
