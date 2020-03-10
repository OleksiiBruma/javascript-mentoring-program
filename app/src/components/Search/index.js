import { connect } from "react-redux";
import { compose } from "redux";
import { setFilterTerm } from "../../actions";
import Search from "./Search";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

export default compose(
  connect(
    state => ({
      filterTerm: state.filterTerm
    }),
    dispatch => ({
      changeFilterTerm: filterTerm => {
        dispatch(setFilterTerm(filterTerm));
      }
    })
  ),
  withStyles(styles)
)(Search);
