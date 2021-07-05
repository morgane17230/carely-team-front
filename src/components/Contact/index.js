import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import Textarea from "src/containers/ConnectedComponents/Textarea";
import Field from "src/containers/ConnectedComponents/Field";
import Icon from "@mdi/react";
import { mdiMenuLeft } from "@mdi/js";

import "src/styles/contact.scss";

const Contact = ({
    isLogged,
    sendMessage,
    changeField,
    lastname,
    firstname,
    email,
    message,
}) => {
    const [validation, setValidation] = useState("");
    let history = useHistory();
    // validation message hidden
    useEffect(() => {
        let timeout;
        if (validation) {
            timeout = setTimeout(() => {
                setValidation("");
                history.push("/")
            }, 5000);
        }
        return () => clearTimeout(timeout);
    }, [validation, handleOnSubmit]);

    // sending method
    const handleOnSubmit = async (evt) => {
        evt.preventDefault();
        sendMessage();
        setValidation("Votre demande a été envoyée");
    };

    return (
        <div className="contact">
            {isLogged && (
                <Link to="/profil" className="contact__header">
                    <Icon path={mdiMenuLeft} title="User Profile" size={1} />
                    Profil
                </Link>
            )}
            <h1 className="contact__title">Contact</h1>
            <div className="modify">
                <form
                    action="post"
                    className="modify__form"
                    onSubmit={handleOnSubmit}
                >
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
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={changeField}
                        value={email}
                    />
                    <Textarea
                        required
                        name="message"
                        type="text"
                        placeholder="Votre message..."
                        onChange={changeField}
                        value={message}
                    />

                    <button type="submit" className="sub__form-button">
                        <span>Valider</span>
                    </button>
                    <span
                        className={
                            validation
                                ? "dropdown__text-validation"
                                : "dropdown__text-validation hidden"
                        }
                    >
                        Votre demande a été envoyée
                    </span>
                </form>
            </div>
        </div>
    );
};

Contact.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    sendMessage: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    lastname: PropTypes.string,
    firstname: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
};

Contact.defaultProps = {
    lastname: "",
    firstname: "",
    email: "",
    message: "",
};

// == Export
export default Contact;
