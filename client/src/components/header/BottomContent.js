import "../../styles/header/BottomContent.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setTypes } from "../../actions";
import MenuButton from "./MenuButton";

class BottomContent extends Component {
  onButtonClick = (type, subType) => {
    const {
      setTypes,
      history,
      location: { pathname }
    } = this.props;

    // will get action creator to redirect to '/' after receiving response from server, but ONLY if we aren't already on '/' (e.g. we are on '/cv');
    if (pathname !== "/") setTypes(type, subType, history);
    else setTypes(type, subType);
  };
  render() {
    const { id } = this.props;
    return (
      <div className="bottom-content" id={id}>
        <MenuButton content="Docs" type="link" path="/docs" />
        <p>Jeffery Epstein Internatonal Comparisons (UK, USA, Global):</p>
        <MenuButton
          content="Daily"
          type="button"
          onClick={() => this.onButtonClick("Epstein", "August 2019")}
        />
        <MenuButton
          content="Death Hourly"
          type="button"
          onClick={() => this.onButtonClick("Epstein", "Death")}
        />
        <p>
          {" "}
          Cricket &#38; Politics UK Comparisons (London, Manchester, Birmingham:
        </p>
        <MenuButton
          content="Ashes 2019"
          type="button"
          onClick={() =>
            this.onButtonClick("Ashes 2019", "August - Entire Month")
          }
        />
        <MenuButton
          content="Ashes: First Test"
          type="button"
          onClick={() => this.onButtonClick("Ashes 2019", "First Test")}
        />
        <MenuButton
          content="Ashes: Second Test"
          type="button"
          onClick={() => this.onButtonClick("Ashes 2019", "Second Test")}
        />
        <MenuButton
          content="Ashes: Third Test"
          type="button"
          onClick={() => this.onButtonClick("Ashes 2019", "Third Test")}
        />
        <MenuButton
          content="Labour Party"
          type="button"
          onClick={() => this.onButtonClick("UK Politics", "Labour Party")}
        />
        <MenuButton
          content="Conservative Party"
          type="button"
          onClick={() =>
            this.onButtonClick("UK Politics", "Conservative Party")
          }
        />
        <p>London A-Level Results Comparisons:</p>
        <MenuButton
          content="1st Decile"
          type="button"
          onClick={() =>
            this.onButtonClick("A-Level Results 2019", "First Decile")
          }
        />
        <MenuButton
          content="2nd Decile"
          type="button"
          onClick={() =>
            this.onButtonClick("A-Level Results 2019", "Second Decile")
          }
        />
        <MenuButton
          content="3rd Decile"
          type="button"
          onClick={() =>
            this.onButtonClick("A-Level Results 2019", "Third Decile")
          }
        />
        <MenuButton
          content="4th Decile"
          type="button"
          onClick={() =>
            this.onButtonClick("A-Level Results 2019", "Fourth Decile")
          }
        />
        <p>Misc:</p>
        <MenuButton content="GitHub" type="link" path="/github" />
        <MenuButton content="CV" type="link" path="/cv" />
        <MenuButton content="Contact" type="link" path="/contact" />
      </div>
    );
  }
}

export default connect(null, { setTypes })(withRouter(BottomContent));
