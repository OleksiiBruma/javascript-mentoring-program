import { Alert } from "./Alert";
import { connect } from "react-redux";

export default connect(state => ({
  errorMessage: state.error
}))(Alert);
