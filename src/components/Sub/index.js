import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Field from "src/containers/ConnectedComponents/Field";
import Icon from "@mdi/react";
import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";

import "src/styles/sub.scss";

const Sub = ({
    onSearchCompany,
    company,
    lastname,
    firstname,
    func,
    email,
    password,
    passwordConfirm,
    onSubscribe,
    changeField,
    error,
}) => {
    const [validation, setValidation] = useState("");
    const [openWatch, setOpenWatch] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    const [cgu, setCgu] = useState(false);
    const passwordShown = openWatch ? "text" : "password";
    const iconPassword = openWatch ? mdiEyeOutline : mdiEyeOffOutline;
    const history = useHistory();

    const handleOnSearch = (evt) => {
        onSearchCompany(evt.target.value);
        !!error ? setDisplayError(true) : null;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubscribe();
        if (!error.data) {
            setValidation("Inscription réussie");
        } else {
            setDisplayError(true);
        }
    };

    const handleChecked = (evt) => {
        setCgu(evt.target.checked);
    };

    useEffect(() => {
        let timeout;
        if (validation) {
            timeout = setTimeout(() => {
                setValidation("");
                history.push("/");
            }, 3000);
        } else if (displayError) {
            timeout = setTimeout(() => {
                setDisplayError(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [validation, handleSubmit]);

    useEffect(() => {
        let timeout;
        if (displayError) {
            timeout = setTimeout(() => {
                setDisplayError(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [displayError, handleOnSearch]);

    return (
        <div className="sub">
            <h1 className="sub__title">Inscription</h1>
            <form method="post" className="sub__form" onSubmit={handleSubmit}>
                <div className="sub__form-left">
                    <Field
                        required
                        name="lastname"
                        type="text"
                        placeholder="Nom"
                        onChange={changeField}
                        value={lastname}
                    />
                    <Field
                        required
                        name="firstname"
                        type="text"
                        placeholder="Prénom"
                        onChange={changeField}
                        value={firstname}
                    />
                    <Field
                        required
                        name="func"
                        type="text"
                        placeholder="Fonction"
                        onChange={changeField}
                        value={func}
                    />
                    <Field
                        required
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={changeField}
                        value={email}
                    />
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
                </div>
                <div className="sub__form-right">
                    <div className="sub__form-input">
                        <input
                            required
                            id="finess"
                            name="finess"
                            type="text"
                            onBlur={handleOnSearch}
                        />
                        <label
                            htmlFor="finess"
                            title="N° FINESS"
                            data-title="N° FINESS"
                        />
                    </div>
                    <div className="sub__form-infos">
                        <span>{company.name}</span>
                        <span>
                            {company.num} {company.type} {company.address}
                        </span>
                        <span>{company.city}</span>
                    </div>
                    <div className="sub__form-cgu">
                        <input
                            required
                            type="checkbox"
                            name="cgu"
                            placeholder="cgu"
                            onChange={handleChecked}
                            value={cgu}
                        />
                        <span>
                            Accepter les
                            <Link
                                to="/conditions-generales-d-utilisation"
                                className="sub__form-cgu-link"
                            >
                                CGU
                            </Link>
                        </span>
                    </div>
                    <button type="submit" className="sub__form-button">
                        <span>Valider</span>
                    </button>
                    
                        <span
                            className={
                                displayError || validation
                                    ? "dropdown__text-validation"
                                    : "dropdown__text-validation hidden"
                            }
                        >
                           {displayError && error.data}{validation && !error.data && validation}
                        </span>                   
                </div>
            </form>
        </div>
    );
};

Sub.propTypes = {
    onSearchCompany: PropTypes.func.isRequired,
    company: PropTypes.object,
    lastname: PropTypes.string,
    firstname: PropTypes.string,
    func: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirm: PropTypes.string,
    onSubscribe: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    error: PropTypes.object,
};

Sub.defaultProps = {
    company: {},
    lastname: "",
    firstname: "",
    func: "",
    email: "",
    password: "",
    passwordConfirm: "",
    error: {},
};

export default Sub;
