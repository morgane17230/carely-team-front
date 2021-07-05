import React from "react";
import { Link } from "react-router-dom";

import "src/styles/footer.scss";

const dayjs = require("dayjs");

const Footer = () => (
    <div className="footer">
        <ul className="footer__ul">
            <li className="footer__li">
                <Link to="/conditions-generales-d-utilisation">CGU</Link>
            </li>
            <li className="footer__li">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="footer__li">
                © - {dayjs(Date.now()).format("YYYY")} - CarelyTeam
            </li>
            <li className="footer__li">
                <Link to="/mentions-legales">Mentions légales</Link>
            </li>
        </ul>
    </div>
);

export default Footer;
