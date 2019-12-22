import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import hamburgerReducer from "./hamburgerReducer";
import formReviewReducer from "./formReviewReducer";
import sendEmailReducer from "./sendEmailReducer";
import searchTypeReducer from "./searchTypeReducer";
import dataReducer from "./dataReducer";

export default combineReducers({
  hamburgerOn: hamburgerReducer,
  reviewOn: formReviewReducer,
  emailStatus: sendEmailReducer,
  searchType: searchTypeReducer,
  data: dataReducer,
  form: formReducer
});
