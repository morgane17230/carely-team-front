import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Field from "src/containers/ConnectedComponents/Field";
import Reset from "src/containers/Header/Reset";
import Icon from "@mdi/react";
import { mdiPower, mdiExitToApp } from "@mdi/js";

import logo from "src/assets/logo_blanc.png";
import "src/styles/header.scss";

const Header = ({
    email,
    password,
    changeField,
    onLogin,
    isLogged,
    loggedMessage,
    handleLogout,
    rehydrate,
    error,
}) => {
    const [openReset, setOpenReset] = useState(false);
    const [validation, setValidation] = useState(false);
    let history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onLogin();
        setValidation(true);
    };

    const handleOut = () => {
        handleLogout();
        history.push("/");
    };

    useEffect(() => {
        if (isLogged) rehydrate();
    }, []);

    useEffect(() => {
        let timeout;
        if (validation) {
            timeout = setTimeout(() => {
                setValidation(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [validation, handleSubmit]);

    return (
        <div className="header">
            <Link className="header__left" to="/">
                <img
                    className="header__left-logo"
                    src={logo}
                    alt="carelyteam logo"
                />
                <h1 className="header__left-title">CarelyTeam</h1>
            </Link>

            {isLogged ? (
                <div className="header__connected">
                    <Link
                        to="/"
                        type="button"
                        className="header__btn"
                        onClick={handleOut}
                    >
                        {loggedMessage}
                        <Icon
                            path={mdiExitToApp}
                            title="User Profile"
                            size={1}
                            color="white"
                        />
                    </Link>
                </div>
            ) : (
                <div className="header__connexion">
                    {openReset ? (
                        <Reset setOpenReset={setOpenReset} />
                    ) : (
                        <>
                            <form
                                method="post"
                                className="header__connexion-form"
                                onSubmit={handleSubmit}
                            >
                                <Field
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={changeField}
                                    value={email}
                                />
                                <Field
                                    required
                                    name="password"
                                    type="password"
                                    placeholder="Mot de passe"
                                    onChange={changeField}
                                    value={password}
                                />
                                <button
                                    type="submit"
                                    className="header__connexion-button"
                                >
                                    <Icon
                                        path={mdiPower}
                                        size={1}
                                        color="white"
                                    />
                                </button>
                            </form>
                        </>
                    )}
                    <div
                        className="header__connexion-reset"
                        style={{ display: "flex" }}
                    >
                        <Link
                            className="header__connexion-reset-link"
                            to="#"
                            onClick={() => setOpenReset(true)}
                        >
                            Mot de passe oublié
                        </Link>
                        {validation && (
                            <span style={{ color: "white" }}>{error.data}</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

Header.propTypes = {
    isLogged: PropTypes.bool,
    loggedMessage: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    changeField: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    rehydrate: PropTypes.func.isRequired,
    error: PropTypes.object,
};

Header.defaultProps = {
    email: "",
    password: "",
    isLogged: false,
    error: {},
};

export default Header;
