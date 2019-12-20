import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import hamburgerReducer from "./hamburgerReducer";
import formReviewReducer from "./formReviewReducer";
import sendEmailReducer from "./sendEmailReducer";

export default combineReducers({
  hamburgerOn: hamburgerReducer,
  reviewOn: formReviewReducer,
  emailStatus: sendEmailReducer,
  form: formReducer
});
