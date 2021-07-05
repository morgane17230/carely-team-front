import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Field from "src/containers/ConnectedComponents/Field";
import Icon from "@mdi/react";
import { mdiClose, mdiCheck } from "@mdi/js";

import "src/styles/header.scss";

const Reset = ({
    emailUser,
    resetPasswordCall,
    changeField,
    setOpenReset,
    error,
}) => {
    const [validation, setValidation] = useState(false);

    const handleForgot = (evt) => {
        evt.preventDefault();
        resetPasswordCall();
        setValidation(true);
    };
 
    useEffect(() => {
        let timeout;
        if (validation) {
            timeout = setTimeout(() => {
                setValidation(false);
                setOpenReset(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [validation, handleForgot]);

    return (
        <>
            {validation ? (
                <div className="header__connexion-validation">
                    {!!error.data ? error.data : "Lien de réinitialisation envoyé par mail, il sera valable 15 min."}
                </div>
            ) : (
                <form
                    action="post"
                    className="header__connexion-form"
                    onSubmit={handleForgot}
                >
                    <Field
                        required
                        name="emailUser"
                        type="email"
                        placeholder="Email"
                        onChange={changeField}
                        value={emailUser}
                    />
                    <button type="submit" className="header__connexion-button">
                        <Icon path={mdiCheck} size={1} color="white" />
                    </button>
                    <button
                        type="submit"
                        className="header__connexion-button"
                        onClick={() => setOpenReset(false)}
                    >
                        <Icon path={mdiClose} size={1} color="white" />
                    </button>
                </form>
            )}
        </>
    );
};

Reset.propTypes = {
    emailUser: PropTypes.string,
    changeField: PropTypes.func.isRequired,
    resetPasswordCall: PropTypes.func.isRequired,
    setOpenReset: PropTypes.func.isRequired,
    error: PropTypes.object,
};

Reset.defaultProps = {
    emailUser: "",
    error: {},
};

export default Reset;
