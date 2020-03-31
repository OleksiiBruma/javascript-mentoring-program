import { hideLoader, authorsError, resetError, showLoader } from "../actions";
import { AUTHORS_SUCCESS } from "../constants";
import { getAuthorsAPI } from "../api"

export const authorsSuccess = payload => ({
  type: AUTHORS_SUCCESS,
  payload
});
export const loadAuthors = () => async dispatch => {
  dispatch(showLoader());
  dispatch(resetError());
  try {
    const response = await getAuthorsAPI();
    const authors = await response.json();
    dispatch(authorsSuccess(authors));
    dispatch(hideLoader());
  } catch (error) {
    dispatch(authorsError(error.message));
    dispatch(hideLoader());
  }
};
