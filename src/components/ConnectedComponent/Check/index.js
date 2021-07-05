import React from "react";
import PropTypes from "prop-types";

const Check = ({
    value,
    type,
    name,
    checked,
    placeholder,
    onChange,
    required,
}) => {
    const handleChange = (evt) => {
        onChange(evt.target.checked, name);
    };

    const inputId = `check-${name}`;

    return (
        <div className={value ? "check check--has-content" : "check"}>
            <input
                required={required}
                value={!!checked}
                onChange={handleChange}
                id={inputId}
                type={type}
                className="check-input"
                placeholder={placeholder}
                name={name}
            />
            <label htmlFor={inputId} className="check-label">
                {placeholder}
            </label>
        </div>
    );
};

Check.propTypes = {
    value: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
};

Check.defaultProps = {
    checked: false,
};

export default Check;
