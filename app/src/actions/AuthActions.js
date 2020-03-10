import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants";
import { resetError, showLoader, hideLoader, loginError } from "../actions";
import { loginAPI, saveLoginStateAPI, logoutAPI } from "../api";
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});
export const login = payload => async dispatch => {
  dispatch(resetError());
  dispatch(showLoader());
  const { credentials, history } = payload;
  try {
    const response = await loginAPI(credentials);
    if (!response.ok) {
      throw new Error("Incorrect credentials, please try again");
    }
    saveLoginStateAPI();
    dispatch(loginSuccess());
    dispatch(hideLoader());
    history.push("/courses");
  } catch (error) {
    dispatch(loginError(error.message));
    dispatch(hideLoader());
  }
};

export const logout = payload => async dispatch => {
  dispatch(showLoader());
  dispatch(resetError());
  const { history } = payload;
  logoutAPI();
  dispatch(logoutSuccess());
  dispatch(hideLoader());
  history.push("/login");
};
