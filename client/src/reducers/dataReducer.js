import { GET_DATA, SET_TYPES } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case SET_TYPES:
      return action.payload.data;
    default:
      return state;
  }
};
