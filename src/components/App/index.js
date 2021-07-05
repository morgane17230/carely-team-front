import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "src/containers/Header";
import Footer from "src/components/Footer";
import Home from "src/components/Home";
import Contact from "src/containers/Contact";
import Legalnotice from "src/containers/Legalnotice";
import CGU from "src/containers/CGU";
import Profil from "src/containers/Profil";
import Messages from "src/containers/Messages";
import Groups from "src/containers/Groups";
import Members from "src/containers/Members";
import Sub from "src/containers/Sub";
import OthersSub from "src/containers/Sub/OthersSub";
import PasswordReset from "src/containers/Header/PasswordReset";
import Error from "src/components/Error";

import "src/styles/app.scss";

const App = ({ isLogged }) => {
    const location = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [location]);

    return (
        <div className="app">
            <Header />
            {isLogged && <Redirect to="/profil" />}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/inscription" component={Sub} />
                <Route exact path="/invitation" component={OthersSub} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/mentions-legales" component={Legalnotice} />

                <Route
                    exact
                    path="/nouveau-mot-de-passe"
                    component={PasswordReset}
                />
                <Route
                    exact
                    path="/conditions-generales-d-utilisation"
                    component={CGU}
                />
                {isLogged && (
                    <>
                        <Redirect to="/profil" />
                        <Route path="/profil" component={Profil} />
                        <Route exact path="/messages" component={Messages} />
                        <Route exact path="/groupes" component={Groups} />
                        <Route exact path="/membres" component={Members} />
                    </>
                )}

                <Route path="/page-non-trouvee" component={Error} />
                <Redirect to="/page-non-trouvee" />
            </Switch>
            <Footer />
        </div>
    );
};

App.propTypes = {
    isLogged: PropTypes.bool,
};

App.defaultProps = {
    isLogged: false,
};

export default App;
