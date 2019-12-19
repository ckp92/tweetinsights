import "../../styles/main/Main.css";
import React from "react";
import Shell from "../Shell";

const Main = () => {
  return (
    <div className="main">
      <Shell header="Main" content="MainContent" footer="MainFooter" />
    </div>
  );
};

export default Main;
