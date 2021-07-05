import React from "react";
import PropTypes from "prop-types";

import "src/styles/textarea.scss";

const Textarea = ({ value, name, placeholder, onChange, required }) => {
    const handleChange = (evt) => {
        onChange(evt.target.value, name);
    };

    const inputId = `textarea-${name}`;

    return (
        <div
            className={
                value.length > 0 ? "textarea textarea--has-content" : "textarea"
            }
        >
            <textarea
                required={required}
                value={value}
                onChange={handleChange}
                id={inputId}
                className="textarea-input"
                placeholder={placeholder}
                name={name}
                cols="200"
            />
            <label htmlFor={inputId} className="textarea-label">
                {placeholder}
            </label>
        </div>
    );
};

Textarea.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
};

Textarea.defaultProps = {
    value: "",
    required: false,
    placeholder: "",
};

export default Textarea;
