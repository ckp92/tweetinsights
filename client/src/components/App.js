import "../styles/App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleHamburger, getData } from "../actions";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./main/Main";
import Header from "./header/Header";
import Contact from "./contact/Contact";
import Docs from "./docs/Docs";
import CV from "./cv/CV";
import GitHub from "./github/GitHub";

class App extends Component {
  // get initial data
  componentDidMount = () => {
    const {
      searchType: { type, subType },
      getData
    } = this.props;

    getData(type, subType);
  };

  // close hamburger menu
  onContainerClick = () => {
    const { hamburgerOn, toggleHamburger } = this.props;

    if (hamburgerOn) toggleHamburger(false);
  };

  render() {
    return (
      <div className="app" onClick={this.onContainerClick}>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/docs" exact component={Docs} />
            <Route path="/cv" exact component={CV} />
            <Route path="/github" exact component={GitHub} />
            <Route path="/contact" exact component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ hamburgerOn, searchType }) => {
  return { hamburgerOn, searchType };
};

export default connect(mapStateToProps, { toggleHamburger, getData })(App);
