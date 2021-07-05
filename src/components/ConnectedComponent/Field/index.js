import React from "react";
import PropTypes from "prop-types";
import "src/styles/field.scss";

const Field = ({
  value, type, name, placeholder, onChange, required, error,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div error={error} className={error ? "error input" : "input"}>
      <input
        required={required}
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      <label
        htmlFor={inputId}
        title={
                  error ? "Les mots de passe ne correspondent pas" : placeholder
              }
        data-title={
                  error ? "Les mots de passe ne correspondent pas" : placeholder
              }
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.any,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.number,
};

Field.defaultProps = {
  value: [0, ''],
  required: false,
  placeholder: '',
  error: undefined,
};

export default Field;
