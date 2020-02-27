import { connect } from "react-redux";
import { compose } from "redux";
import { searchCourses } from "../../actions";
import Search from "./Search";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

export default compose(
  connect(null, dispatch => ({
    search: (searchTerm) => {
      dispatch(searchCourses(searchTerm));
    }
  })),
  withStyles(styles)
)(Search);
