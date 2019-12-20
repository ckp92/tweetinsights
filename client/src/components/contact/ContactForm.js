import "../../styles/contact/ContactForm.css";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { toggleFormReview } from "../../actions";
import formFields from "./formFields";
import FormField from "./FormField";
import Button from "../Button";

class ContactForm extends Component {
  onSubmit = () => {
    this.props.toggleFormReview(true);
  };

  renderFields = () => {
    return formFields.map(fields => {
      return <Field {...fields} key={fields.name} component={FormField} />;
    });
  };

  render() {
    return (
      <form
        className="contact-form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        {this.renderFields()}
        <Button content="Next" type="submit" />
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // email validation
  if (re.test(formValues.senderEmail) === false)
    errors.senderEmail = "Invalid Email";

  // empty fields validation
  formFields.forEach(field => {
    if (!formValues[field.name]) errors[field.name] = "Required";
  });

  return errors;
};

const connected = connect(null, { toggleFormReview })(ContactForm);

export default reduxForm({
  form: "contactForm",
  validate,
  destroyOnUnmount: false
})(connected);
