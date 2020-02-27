import { compose } from "redux";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom";
import { login } from "../../actions"
export default compose(
  connect(null,dispatch => ({
    login: payload => dispatch(login(payload))
  })),
  withRouter
)(LoginForm);
