import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TransferList from "./TransferList";
import styles from "./styles";
import { loadAuthors } from "../../actions";
import { getAuthors } from "../../selectors"
export default compose(
  connect(
    state => ({
      initialList: getAuthors(state)
    }),
    dispatch => ({
      loadInitialList: () => dispatch(loadAuthors())
    })
  ),
  withStyles(styles)
)(TransferList);
