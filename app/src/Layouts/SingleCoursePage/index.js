import { compose } from "redux";
import { connect } from "react-redux";
import SingleCoursePage from "./SingleCoursePage";
import {
  addCourse,
  editCourse
} from "../../actions";
export default compose(
  connect(null, dispatch => ({
    addCourse: payload => dispatch(addCourse(payload)),
    editCourse: payload => dispatch(editCourse(payload))
  })),
)(SingleCoursePage);
