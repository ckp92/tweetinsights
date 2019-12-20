import "../../styles/contact/Contact.css";
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { toggleFormReview } from "../../actions";
import Shell from "../Shell";
import ContactForm from "./ContactForm";
import ContactFormReview from "./ContactFormReview";

class Contact extends Component {
  componentWillUnmount = () => this.props.toggleFormReview(false);

  renderHeader = () => {
    const { reviewOn } = this.props;

    if (reviewOn) {
      return (
        <div className="contact-header">
          <h1>Review and Send</h1>
          <p>Does everything look ok?</p>
        </div>
      );
    } else {
      return (
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Let me know what you think!</p>
        </div>
      );
    }
  };

  renderContent = () => {
    const { reviewOn } = this.props;

    if (reviewOn) return <ContactFormReview />;
    else return <ContactForm />;
  };

  renderFooter = () => {
    return (
      <p>
        Alternatively, send an email to{" "}
        <a
          href="mailto:cpatel818@gmail.com?Subject=RE:%20TWEET%20INSIGHTS"
          target="_blank"
          rel="noopener noreferrer"
        >
          cpatel818@gmail.com
        </a>
      </p>
    );
  };
  render() {
    return (
      <div className="contact">
        <Shell
          header={this.renderHeader()}
          content={this.renderContent()}
          footer={this.renderFooter()}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ reviewOn }) => {
  return { reviewOn };
};

const connected = connect(mapStateToProps, { toggleFormReview })(Contact);

export default reduxForm({ form: "contactForm" })(connected);
