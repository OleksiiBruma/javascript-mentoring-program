import { compose } from "redux";
import { connect } from "react-redux";
import SingleCoursePage from "./SingleCoursePage";
import { withRouter } from "react-router-dom";
import { loadAuthors, addCourse, editCourse, loadCourseById } from "../../actions";
export default compose(
  connect(
    state => ({
      allAuthors: state.authors,
      currentCourse: state.courses.editCourse
    }),
    dispatch => ({
      loadAuthors: () => dispatch(loadAuthors()),
      addCourse: payload => dispatch(addCourse(payload)),
      editCourse: payload => dispatch(editCourse(payload)),
      loadCourse: payload => dispatch(loadCourseById(payload))
    })
  ),
  withRouter
)(SingleCoursePage);
