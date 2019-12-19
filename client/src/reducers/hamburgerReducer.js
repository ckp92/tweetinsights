import { TOGGLE_HAMBURGER } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      return action.payload;
    default:
      return state;
  }
};
