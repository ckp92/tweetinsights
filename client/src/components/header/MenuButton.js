import "../../styles/header/MenuButton.css";
import React from "react";
import { Link } from "react-router-dom";

const MenuButton = ({ id, content, type, onClick, path }) => {
  const renderButton = () => {
    if (type === "button") {
      return (
        <button className="menu-button" id={id} onClick={onClick}>
          {content}
        </button>
      );
    } else if (type === "link") {
      return (
        <Link className="menu-button" id={id} to={path}>
          {content}
        </Link>
      );
    } else if (type === "anchor") {
      return (
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-button"
          id={id}
        >
          {content}
        </a>
      );
    }
  };
  return renderButton();
};

export default MenuButton;
