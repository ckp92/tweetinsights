import "../styles/Button.css";
import React from "react";

const Button = ({ id, onClick, type, content }) => {
  return (
    <button className="button" id={id} onClick={onClick} type={type}>
      {content}
    </button>
  );
};

export default Button;
