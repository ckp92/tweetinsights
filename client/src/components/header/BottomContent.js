import "../../styles/header/BottomContent.css";
import React from "react";
import MenuButton from "./MenuButton";

const BottomContent = ({ id }) => {
  return (
    <div className="bottom-content" id={id}>
      <MenuButton content="Docs" type="link" path="/docs" />
      <p>Jeffery Epstein Internatonal Comparisons (UK, USA, Global):</p>
      <MenuButton content="Daily" type="button" onClick="" />
      <MenuButton content="Death Hourly" type="button" onClick="" />
      <p>
        {" "}
        Cricket &#38; Politics UK Comparisons (London, Manchester, Birmingham:
      </p>
      <MenuButton content="Ashes 2019" type="button" onClick="" />
      <MenuButton content="Ashes: First Test" type="button" onClick="" />
      <MenuButton content="Ashes: Second Test" type="button" onClick="" />
      <MenuButton content="Ashes: Third Test" type="button" onClick="" />
      <MenuButton content="Labour Party" type="button" onClick="" />
      <MenuButton content="Conservative Party" type="button" onClick="" />
      <p>London A-Level Results Comparisons:</p>
      <MenuButton content="1st Decile" type="button" onClick="" />
      <MenuButton content="2nd Decile" type="button" onClick="" />
      <MenuButton content="3rd Decile" type="button" onClick="" />
      <MenuButton content="4th Decile" type="button" onClick="" />
      <p>Misc:</p>
      <MenuButton content="GitHub" type="link" path="/github" />
      <MenuButton content="CV" type="link" path="/cv" />
      <MenuButton content="Portfolio" type="link" path="/" />
      <MenuButton content="Contact" type="link" path="/contact" />
    </div>
  );
};

export default BottomContent;
