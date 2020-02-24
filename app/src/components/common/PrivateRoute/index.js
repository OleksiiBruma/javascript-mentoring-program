import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";

export default connect(state => ({
  isAuthenticate: state.authenticate
}),
null)
(PrivateRoute);
