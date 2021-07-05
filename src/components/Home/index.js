// == Import npm
import React from "react";
import { Link } from "react-router-dom";

import "src/styles/home.scss";

const Home = () => (
    <div className="home">
        <div className="home__banner">
            <div className="home__banner-text">
                <p>
                    Améliorez la communication dans votre établissement avec
                    <span> CarelyTeam </span>.
                </p>
                <p>
                    Créez des groupes de parole en ligne et invitez vos équipes
                    à s'exprimer anonymement !
                </p>
            </div>
        </div>
        <Link to="/inscription" className="home__button">
            <span>S'inscrire</span>
        </Link>
    </div>
);

export default Home;
