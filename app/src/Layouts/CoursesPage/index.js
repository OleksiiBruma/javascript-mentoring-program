import CoursesPage from "./CoursesPage";
import { loadCourses, deleteCourseById } from "../../actions";
import { connect } from "react-redux";
import { getVisibleCourses } from "../../selectors";

export default connect(
  state => ({
    courses: getVisibleCourses(state)
  }),
  dispatch => ({
    loadCourses: () => dispatch(loadCourses()),
    deleteCourse: id => dispatch(deleteCourseById(id))
  })
)(CoursesPage);
