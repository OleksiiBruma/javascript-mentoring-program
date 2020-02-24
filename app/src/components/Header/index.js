import Header from "./Header.js";
import { connect } from "react-redux";
import { compose } from "redux";
import { logout } from "../../actions";
import { withRouter } from "react-router-dom";

export default compose(
  connect(
    state => ({
      isAuthenticate: state.authenticate
    }),
    dispatch => ({
      logout: (payload) => dispatch(logout(payload))
    })
  ),
  withRouter
)(Header);
