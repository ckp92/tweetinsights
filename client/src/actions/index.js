import { TOGGLE_HAMBURGER } from "./types";

// toggle hamburger menu -------------------------------------------------------------------------------------
export const toggleHamburger = value => {
  return { type: TOGGLE_HAMBURGER, payload: value };
};
