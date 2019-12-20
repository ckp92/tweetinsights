import "../../styles/header/Header.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleHamburger, closeModal } from "../../actions";
import BottomContent from "./BottomContent";
import MenuButton from "./MenuButton";
import Modal from "../Modal";

class Header extends Component {
  renderModal = () => {
    const { emailStatus, closeModal } = this.props;

    if (!emailStatus) return;

    const title = emailStatus.charAt(0).toUpperCase() + emailStatus.slice(1);

    let message = null;

    if (emailStatus === "success") message = "Message sent successfully!";
    else if (emailStatus === "error")
      message =
        "Oops - There was an error sending the message. Please try again";

    return <Modal title={title} message={message} onDismiss={closeModal} />;
  };

  onHamburgerClick = () => {
    const { hamburgerOn, toggleHamburger } = this.props;

    if (!hamburgerOn) toggleHamburger(true);
  };

  renderResponsiveBottom = () => {
    const { hamburgerOn } = this.props;

    if (hamburgerOn) return <BottomContent id="responsive-menu" />;
  };

  render() {
    return (
      <div className="header">
        {this.renderModal()}
        <div className="header-top">
          <button className="hamburger" onClick={this.onHamburgerClick}>
            <i className="fas fa-bars fa-2x" />
          </button>
          <MenuButton
            content="TWEET INSIGHTS"
            id="brand-logo"
            type="link"
            path="/"
          />
        </div>
        <div className="header-bottom">
          <BottomContent />
        </div>
        {this.renderResponsiveBottom()}
      </div>
    );
  }
}

const mapStateToProps = ({ hamburgerOn, emailStatus }) => {
  return { hamburgerOn, emailStatus };
};

export default connect(mapStateToProps, { toggleHamburger, closeModal })(
  Header
);
