import {
  TOGGLE_HAMBURGER,
  TOGGLE_FORM_REVIEW,
  SEND_EMAIL,
  CLOSE_MODAL
} from "./types";

// toggle hamburger menu -------------------------------------------------------------------------------------
export const toggleHamburger = value => {
  return { type: TOGGLE_HAMBURGER, payload: value };
};

// toggle form review ----------------------------------------------------------------------------------------
export const toggleFormReview = value => {
  return { type: TOGGLE_FORM_REVIEW, payload: value };
};

// send contact email ----------------------------------------------------------------------------------------
export const sendEmail = (formValues, history) => async dispatch => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(formValues)
  };

  const res = await fetch("/api/contact", options);
  const data = await res.json();

  history.push("/");
  dispatch({ type: SEND_EMAIL, payload: data.status });
};

// close modal -----------------------------------------------------------------------------------------------
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
