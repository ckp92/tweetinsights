import "../../styles/docs/Docs.css";
import React from "react";
import content from "./content";
import Shell from "../Shell";
import Section from "./Section";

const Docs = () => {
  const renderContent = () => {
    return content.map(({ heading, list }) => (
      <Section key={heading} heading={heading} list={list} />
    ));
  };

  return (
    <div className="docs">
      <Shell header={<h1>Docs!</h1>} content={renderContent()} />
    </div>
  );
};

export default Docs;
