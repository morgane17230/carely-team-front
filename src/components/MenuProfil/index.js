import React from "react";
import propTypes from "prop-types";

import { NavLink } from "react-router-dom";

import "src/styles/menuprofil.scss";

const MenuProfil = ({ role }) => {

    return (
        <div className="menu">
            <ul className="menu__nav">
                <li className="menu__nav-item">
                    <NavLink activeClassName="active" to="/profil">
                        Profil
                    </NavLink>
                </li>
                {role !== "user" && (
                    <li className="menu__nav-item">
                        <NavLink to="/groupes">Groupes</NavLink>
                    </li>
                )}
                <li className="menu__nav-item">
                    <NavLink to="/messages">Messages</NavLink>
                </li>
                {role === "admin" && (
                    <li className="menu__nav-item">
                        <NavLink to="/membres">Membres</NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
};

MenuProfil.propTypes = {
    role: propTypes.string,
};

MenuProfil.defaultProps = {
    role: '',
};

export default MenuProfil;
