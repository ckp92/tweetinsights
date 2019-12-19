import "../../styles/header/Header.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleHamburger } from "../../actions";
import BottomContent from "./BottomContent";
import MenuButton from "./MenuButton";

class Header extends Component {
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

const mapStateToProps = ({ hamburgerOn }) => {
  return { hamburgerOn };
};

export default connect(mapStateToProps, { toggleHamburger })(Header);
