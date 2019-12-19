import "../styles/App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./main/Main";
import Header from "./header/Header";
const Docs = () => <h2>Docs!</h2>;
const CV = () => <h2>CV!</h2>;
const GitHub = () => <h2>GitHub!</h2>;
const Contact = () => <h2>Contact!</h2>;

const App = () => {
  return (
    <div className="app">
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
};

export default App;
