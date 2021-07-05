// == Import npm
import React, { useState, useEffect } from "react";
import MenuProfil from "src/containers/MenuProfil";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import Field from "src/containers/ConnectedComponents/Field";
// == Import
import "src/styles/members.scss";

// == Composant
const Members = ({
    users,
    changeField,
    onDetachUser,
    userId,
    onSelectAuthor,
    onAddAuthor,
    onDeleteAuthor,
    selectedUserId,
    emails,
    emailUser,
    onChangeEmails,
    onSendUsersMail,
    onDetachUserMail,
    error,
}) => {
    // hook permettant d'afficher les messages de validation ou d'erreur
    // à la validation du formulaire d'envoi des invitations
    const [validation, setValidation] = useState(false);

    // méthode d'ajout d'un email à la liste des emails du
    // formulaire d'invitation
    const handleSubmit = (evt) => {
        evt.preventDefault();
        emails.push(emailUser);
        onChangeEmails(emails);
    };

    // méthode d'envoi du formulaire d'invitation par email
    const handleAddUser = (evt) => {
        evt.preventDefault();
        onSendUsersMail(emails);
        setValidation(true);
    };

    // méthode de suppression d'un email de la liste d'emails du
    // formulaire d'invitation par email
    const handleUserMail = (evt) => {
        emails.splice(Number(evt.currentTarget.value), 1);
        onDetachUserMail(emails);
    };

    // méthode pour supprimer un employé de l'établissement
    const handleDetachUser = (event) => {
        onDetachUser(Number(event.currentTarget.value));
    };

    // méthode pour changer le role d'un employé de l'établissement
    // d'user à auteur
    const handleSelectAuthor = (evt) => {
        evt.preventDefault();
        onSelectAuthor(evt.target.value);
        onAddAuthor(evt.target.value);
    };

    // // méthode pour changer le role d'un employé de l'établissement
    // d'auteur à user
    const handleDeleteAuthor = (evt) => {
        onDeleteAuthor(evt.currentTarget.value);
    };

    // méthode d'affichage du message de validation ou d'erreur
    // avec disparition au bout de 3s
    useEffect(() => {
        let timeout;
        if (validation) {
            timeout = setTimeout(() => {
                setValidation(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [validation, handleAddUser]);

    // fragment affichant un email dans la liste d'emails
    // sous le formulaire d'invitation par email
    const emailsList = (email, index) => {
        return (
            <div key={index} className="list__content">
                <div className="list__content-item">
                    <span>{email}</span>
                    <button
                        type="submit"
                        value={index}
                        onClick={handleUserMail}
                    >
                        <Icon path={mdiClose} size={1} />
                    </button>
                </div>
            </div>
        );
    };

    // fragment affichant un user dans la liste d'employés
    // de l'établissement
    const usersList = (user) => {
        if (user.role !== "admin")
            return (
                <div key={user.id} className="list__content">
                    <div className="list__content-item">
                        <span>{user.firstname}</span>
                        <span>{user.lastname}</span>
                        <span>{user.func}</span>

                        <button
                            type="button"
                            value={user.id}
                            onClick={handleDetachUser}
                        >
                            {user.id !== userId && user.role !== "admin" && (
                                <Icon path={mdiClose} size={1} />
                            )}
                        </button>
                    </div>
                </div>
            );
    };

    // fragment affichant un auteur dans la liste des auteurs
    // de l'établissement
    const authorList = (user) => {
        if (user.role === "author" && user.role !== "admin")
            return (
                <div key={user.id} className="list__content">
                    <div className="list__content-item">
                        <span>{user.firstname}</span>
                        <span>{user.lastname}</span>
                        <span>{user.func}</span>

                        <button
                            type="button"
                            value={user.id}
                            onClick={handleDeleteAuthor}
                        >
                            {user.id !== userId && user.role !== "admin" && (
                                <Icon path={mdiClose} size={1} />
                            )}
                        </button>
                    </div>
                </div>
            );
    };

    // fragment affichant une option dans le select des employés non auteurs
    // de l'établissement
    const optionAuthor = (user) => {
        if (user.id !== userId) {
            if (user.role !== "author") {
                return (
                    <option key={user.id} value={user.id}>
                        {user.lastname} {user.firstname}
                    </option>
                );
            }
        }
    };

    // structure de base de la page members
    return (
        <div className="members">
            {/* composant menu onglets */}
            <MenuProfil />
            <div className="list">
                <div className="list__container">
                    <div className="list__container-header">
                        {/* liste des employés de l'établissement */}
                        <span>Vos employés</span>
                    </div>
                    <div className="list__header">
                        <p className="list__header-title">Nom</p>
                        <p className="list__header-title">Prénom</p>
                        <p className="list__header-title">Fonction</p>
                        <p className="list__header-title">Supprimer</p>
                    </div>
                    <div className="list__content">{users.map(usersList)}</div>
                </div>
                <div className="list__container">
                    <div className="list__container-header">
                        {/* liste des auteurs de l'établissement */}
                        <span>Personnes autorisées à créer des groupes...</span>
                        <select
                            className="list__container-header-select"
                            name="companies"
                            onChange={handleSelectAuthor}
                            value={selectedUserId}
                        >
                            <option value="">Employés...</option>
                            {users.map(optionAuthor)}
                        </select>
                    </div>
                    <div className="list__header">
                        <p className="list__header-title">Nom</p>
                        <p className="list__header-title">Prénom</p>
                        <p className="list__header-title">Fonction</p>
                        <p className="list__header-title">Supprimer</p>
                    </div>
                    <div className="list__content">{users.map(authorList)}</div>
                </div>
                <div className="list__container">
                    <div className="list__container-header">
                        {/* formulaire d'invitation des employés par email */}
                        <span>Inviter de nouveaux employés</span>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                        <Field
                            required
                            name="emailUser"
                            type="email"
                            placeholder="Entrez les emails un par un"
                            onChange={changeField}
                            value={emailUser}
                        />
                    </form>
                    {/* si succès de l'envoi du formulaire, texte de validation affiché */}
                    {/* si échec de l'envoi, message d'erreur venant de l'API affiché */}
                    {validation ? (
                        <div className="dropdown__text-validation">
                            {!!error.data
                                ? error.data
                                : "Les invitations sont envoyées"}
                        </div>
                    ) : (
                        <>
                            <div className="list__content-emails">
                                {emails.map(emailsList)}
                            </div>

                            <button
                                value={emails}
                                onClick={handleAddUser}
                                type="submit"
                                className="messages__button"
                            >
                                <span>Valider</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// validation du type de chaque props
Members.propTypes = {
    error: PropTypes.object,
    emailUser: PropTypes.string,
    userId: PropTypes.number.isRequired,
    emails: PropTypes.array,
    email: PropTypes.string,
    changeField: PropTypes.func.isRequired,
    onChangeEmails: PropTypes.func.isRequired,
    onDetachUser: PropTypes.func.isRequired,
    onSelectAuthor: PropTypes.func.isRequired,
    onAddAuthor: PropTypes.func.isRequired,
    onDeleteAuthor: PropTypes.func.isRequired,
    onSendUsersMail: PropTypes.func.isRequired,
    onDetachUserMail: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.objectOf(
                PropTypes.shape({
                    selectedUserId: PropTypes.number,
                    company_has_user: PropTypes.objectOf(
                        PropTypes.shape({
                            company_role: PropTypes.string,
                        })
                    ),
                })
            ),
        })
    ),
};

// valeur par défaut des props dont la valeur n'est pas définie
// de base dans le state
Members.defaultProps = {
    emails: [],
    users: [],
    selectedUserId: 0,
    email: "",
    emailUser: "",
    error: {},
};

// == Export
export default Members;
