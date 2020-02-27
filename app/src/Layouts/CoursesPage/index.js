import CoursesPage from "./CoursesPage";
import { loadCourses, deleteCourseById } from "../../actions";
import { connect } from "react-redux";

export default connect(
  state => ({
    courses: state.courses
  }),
  dispatch => ({
    loadCourses: () => dispatch(loadCourses()),
    deleteCourse: (id) => dispatch(deleteCourseById(id))
  })
)(CoursesPage);
