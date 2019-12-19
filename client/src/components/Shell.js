import "../styles/Shell.css";
import React from "react";

const Shell = ({ header, content, footer }) => {
  return (
    <div className="shell">
      <div className="shell-header">{header}</div>
      <div className="shell-content">{content}</div>
      <div className="shell-footer">{footer}</div>
    </div>
  );
};

export default Shell;
