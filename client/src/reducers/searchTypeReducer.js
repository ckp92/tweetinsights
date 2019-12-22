import { SET_TYPES } from "../actions/types";

const initialState = { type: "Ashes 2019", subType: "August - Entire Month" };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPES:
      const { type, subType } = action.payload;
      return { type, subType };
    default:
      return state;
  }
};
