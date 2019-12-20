import "../../styles/contact/ContactFormReview.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleFormReview } from "../../actions";
import formFields from "./formFields";
import Button from "../Button";

class ContactFormReview extends Component {
  renderFields = () => {
    return formFields.map(({ name, label, type }) => {
      return (
        <div key={name} className="review-field">
          <h4>{label}</h4>
          {this.formatValues(name, type)}
        </div>
      );
    });
  };

  formatValues = (name, type) => {
    const { formValues } = this.props;
    if (type === "textarea") {
      return formValues[name].split("\n").map((line, i) => {
        return <p key={i}>{line}</p>;
      });
    } else {
      return <p>{formValues[name]}</p>;
    }
  };

  render() {
    const { toggleFormReview, formValues, history } = this.props;
    return (
      <div className="contact-form-review">
        <div className="review-fields">{this.renderFields()}</div>
        <div className="review-buttons">
          <Button
            content="Back"
            type="button"
            onClick={() => toggleFormReview(false)}
          />
          <Button content="Send" type="button" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => {
  return { formValues: form.contactForm.values };
};

export default connect(mapStateToProps, { toggleFormReview })(
  withRouter(ContactFormReview)
);
