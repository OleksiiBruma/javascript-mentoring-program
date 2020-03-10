import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import loaderReducer from "./loaderReducer";
import authenticateReducer from "./authenticateReducer";
import errorReducer from "./errorReducer";
import filterTermReducer from "./filterTermReducer";
import authorsReducer from "./authorsReducer";
export default combineReducers({
  courses: coursesReducer,
  loader: loaderReducer,
  authenticate: authenticateReducer,
  error: errorReducer,
  filterTerm: filterTermReducer,
  authors: authorsReducer
});
