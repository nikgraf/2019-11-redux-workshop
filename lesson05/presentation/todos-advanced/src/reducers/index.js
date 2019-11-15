import { combineReducers } from "redux";
import todos from "./todos";
import error from "./error";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter,
  error
});
