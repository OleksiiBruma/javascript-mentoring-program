import { ICourse } from "../../../models/course.model";

export interface ICoursesState {
  courses: ICourse[];
  error: string;
  filterTerm: string;
  currentCourse: ICourse;
  pageType: string;
}

export const initialCoursesState: ICoursesState = {
  courses: [],
  error: null,
  filterTerm: "",
  currentCourse: null,
  pageType: null
};
