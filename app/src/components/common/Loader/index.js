import { Loader } from "./Loader";
import { connect } from "react-redux";

export default connect(state => ({ isLoading: state.loader }))(Loader);
