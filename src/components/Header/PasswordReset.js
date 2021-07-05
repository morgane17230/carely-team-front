import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Field from "src/containers/ConnectedComponents/Field";
import Icon from "@mdi/react";
import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";

import "src/styles/header.scss";

const PasswordReset = ({
    passwordConfirm,
    resetPassword,
    changeField,
    password,
    error,
}) => {
    const [openWatch, setOpenWatch] = useState(false);
    const passwordShown = openWatch ? "text" : "password";
    const iconPassword = openWatch ? mdiEyeOutline : mdiEyeOffOutline;
    const [validation, setValidation] = useState(false);
    const history = useHistory();

    const handleReset = (evt) => {
        evt.preventDefault();
        resetPassword();
        setValidation(true);
    };

    useEffect(() => {
        let timeout;
        if (validation) {
            timeout = setTimeout(() => {
                if (!error.data) {
                    setValidation(false);
                } else {
                    setValidation(true);
                    history.push("/");
                }
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [validation, handleReset]);

    return (
        <div className="reset">
            <div className="reset__container">
                <h1 className="reset__container-title">Nouveau mot de passe</h1>
                <form
                    method="post"
                    className="reset__container-form"
                    onSubmit={handleReset}
                >
                    <div className="password-container">
                        <Field
                            required
                            name="password"
                            type={passwordShown}
                            placeholder="Mot de passe"
                            onChange={changeField}
                            value={password}
                        />
                        <button
                            type="button"
                            onClick={() => setOpenWatch(!openWatch)}
                        >
                            <Icon path={iconPassword} size={1} color="white" />
                        </button>
                    </div>
                    <Field
                        error={password !== passwordConfirm ? 1 : undefined}
                        required
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confirmer mot de passe"
                        onChange={changeField}
                        value={passwordConfirm}
                    />
                    <button type="submit" className="reset__container-button">
                        <span>Valider</span>
                    </button>
                    <span
                        className={
                            validation
                                ? "dropdown__text-validation"
                                : "dropdown__text-validation hidden"
                        }
                    >
                        {!!error.data ? error.data : "Une confirmation vous a été envoyée"}
                    </span>
                </form>
            </div>
        </div>
    );
};

PasswordReset.propTypes = {
    error: PropTypes.string,
    password: PropTypes.string,
    passwordConfirm: PropTypes.string,
    changeField: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
};

PasswordReset.defaultProps = {
    password: "",
    passwordConfirm: "",
    error: {},
};

export default PasswordReset;
