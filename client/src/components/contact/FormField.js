import "../../styles/contact/FormField.css";
import React from "react";

const FormField = ({
  input,
  label,
  type,
  placeholder,
  meta: { active, error, touched }
}) => {
  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            cols="30"
            rows="10"
            placeholder={placeholder}
            {...input}
          ></textarea>
        );
      default:
        return <input {...input} placeholder={placeholder} />;
    }
  };
  return (
    <div className="form-field">
      {renderInput()}
      <div className="form-error">
        {touched && error && !active ? error : ""}
      </div>
    </div>
  );
};

export default FormField;
