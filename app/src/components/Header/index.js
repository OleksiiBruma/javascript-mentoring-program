import Header from "./Header.js";
import { connect } from "react-redux";
import { compose } from "redux";
import { logout } from "../../actions";

export default compose(
  connect(
    state => ({
      isAuthenticate: state.authenticate,
      currentCourseName: state.courses.editCourse.name
    }),
    dispatch => ({
      logout: (payload) => dispatch(logout(payload))
    })
  ),
)(Header);
