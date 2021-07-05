// dependencies import
import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuProfil from "src/containers/MenuProfil";
import Modify from "src/containers/Profil/Modify";
import Delete from "src/containers/Profil/Delete";

// stylesheet import
import "src/styles/profil.scss";

// component creation with props
const Profil = ({ lastname, firstname, func, email, company }) => {
    // hook to open modification form
    const [openModify, setOpenModify] = useState(false);
    // hook to open account deletion modal
    const [openDelete, setOpenDelete] = useState(false);

    return (
        <div className="profil">
            {/* tabs menu component */}
            <MenuProfil />
            <div className="profil__container">
                {/* account deletion modal*/}
                {openDelete && <Delete setOpenDelete={setOpenDelete} />}
                {openModify ? (
                    // modification form component
                    <Modify setOpenModify={setOpenModify} />
                ) : (
                    <div className="profil__container-part-left">
                        <div className="profil__container-part-item">
                            {/* display profile informations */}
                            <span>Nom :</span>
                            <span>{lastname}</span>
                        </div>
                        <div className="profil__container-part-item">
                            <span>Prénom :</span>
                            <span>{firstname}</span>
                        </div>
                        <div className="profil__container-part-item">
                            <span>Email :</span>
                            <span>{email}</span>
                        </div>
                        <div className="profil__container-part-item">
                            <span>Fonction :</span>
                            <span>{func}</span>
                        </div>

                        <div className="profil__container-part-buttons">
                            <button
                                type="button"
                                className="profil__container-part-button"
                                // opening of the account deletion modal
                                onClick={() => setOpenDelete(true)}
                            >
                                <span>Supprimer</span>
                            </button>
                            <button
                                type="button"
                                className="profil__container-part-button"
                                onClick={() => setOpenModify(true)}
                                // opening of the account modification form modal
                            >
                                <span>Modifier</span>
                            </button>
                        </div>
                    </div>
                )}

                <div className="profil__container-part-right">
                    {/* display company informations */}
                    <span className="profil__container-part-right-title">
                        {company.name}
                    </span>
                    <div className="profil__container-part-right-infos">
                        <div className="profil__container-part-right-infos-item">
                            <span>n° FINESS : </span>
                            <span>{company.finess}</span>
                        </div>
                        <div className="profil__container-part-right-infos-item">
                            <span>Adresse : </span>
                            <span>
                                {company.num} {company.type} {company.address}
                            </span>
                        </div>
                        <div className="profil__container-part-right-infos-item">
                            <span>Ville : </span>
                            <span>{company.city}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// data type validation

Profil.propTypes = {
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    func: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
};

export default Profil;
