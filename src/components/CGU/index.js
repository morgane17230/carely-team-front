// == Import npm
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMenuLeft } from "@mdi/js";

import "src/styles/cgu.scss";

const CGU = ({ isLogged }) => (
    <div className="cgu">
        {isLogged && (
            <Link to="/profil" className="cgu__header">
                <Icon path={mdiMenuLeft} title="User Profile" size={1}  />
                Profil
            </Link>
        )}
        <h2 className="cgu__title">Conditions générales d'utilisation</h2>

        <h3 className="cgu__sub-title">Article 1 : Objet</h3>
        <p className="cgu__article">
            Les présentes CGU ou Conditions Générales d’Utilisation encadrent
            juridiquement l’utilisation des services du site CarelyTeam .
            Constituant le contrat entre la société "CarelyTeam" et
            l’Utilisateur, l’accès au site doit être précédé de l’acceptation de
            ces CGU. L’accès à cette plateforme signifie l’acceptation des
            présentes CGU.
        </p>

        <h3 className="cgu__sub-title">Article 2 : Les mentions légales</h3>
        <p className="cgu__article">
            Accédez ici aux{" "}
            <Link className="cgu__link" to="/mentions-legales">
                mentions légales
            </Link>
        </p>

        <h3 className="cgu__sub-title">Article 3 : Accès au site</h3>
        <p className="cgu__article">
            Tous les frais nécessaires pour l’accès aux services (matériel
            informatique, connexion Internet…) sont à la charge de
            l’utilisateur. L’accès aux services dédiés aux membres s’effectue à
            l’aide d’un identifiant et d’un mot de passe. Pour des raisons de
            maintenance ou autres, l’accès au site peut être interrompu ou
            suspendu par l’éditeur sans préavis ni justification.
        </p>

        <h3 className="cgu__sub-title">Article 4 : Collecte des données</h3>
        <p className="cgu__article">
            Pour la création du compte de l’Utilisateur, la collecte des
            informations au moment de l’inscription sur le site est nécessaire
            et obligatoire. Conformément à la loi n°78-17 du 6 janvier relative
            à l’informatique, aux fichiers et aux libertés, la collecte et le
            traitement d’informations personnelles s’effectuent dans le respect
            de la vie privée. Suivant la loi Informatique et Libertés en date du
            6 janvier 1978, articles 39 et 40, l’Utilisateur dispose du droit
            d’accéder, de rectifier, de supprimer et d’opposer ses données
            personnelles. L’exercice de ce droit s’effectue par :
            <br />
            <span>Le formulaire de contact</span>
            <br />
            <span>Son espace utilisateur</span>
        </p>

        <h3 className="cgu__sub-title">Article 5 : Propriété intellectuelle</h3>
        <p className="cgu__article">
            Les logos et les contenus du site CarelyTeam sont protégés par le
            Code de la propriété intellectuelle et par le droit d’auteur. La
            reproduction et la copie des contenus par l’Utilisateur requièrent
            une autorisation préalable du site. Dans ce cas, toute utilisation à
            des usages commerciaux ou à des fins publicitaires est proscrite.
        </p>

        <h3 className="cgu__sub-title">Article 6 : Responsabilité</h3>
        <p className="cgu__article">
            Bien que les informations publiées sur le site soient réputées
            fiables, le site se réserve la faculté d’une non-garantie de la
            fiabilité des sources. Les informations diffusées sur le site Carely
            Team sont présentées à titre purement informatif et sont sans valeur
            contractuelle. En dépit des mises à jour régulières, la
            responsabilité du site ne peut être engagée en cas de modification
            des dispositions administratives et juridiques apparaissant après la
            publication. Il en est de même pour l’utilisation et
            l’interprétation des informations communiquées sur la plateforme. Le
            site décline toute responsabilité concernant les éventuels virus
            pouvant infecter le matériel informatique de l’Utilisateur après
            l’utilisation ou l’accès à ce site. Le site ne peut être tenu pour
            responsable en cas de force majeure ou du fait imprévisible et
            insurmontable d’un tiers. La garantie totale de la sécurité et la
            confidentialité des données n’est pas assurée par le site.
            Cependant, le site s’engage à mettre en œuvre toutes les méthodes
            requises pour le faire au mieux.
        </p>

        <h3 className="cgu__sub-title">Article 7 : Liens hypertextes</h3>
        <p className="cgu__article">
            Le site peut être constitué de liens hypertextes. En cliquant sur
            ces derniers, l’Utilisateur sortira de la plateforme. Cette dernière
            n’a pas de contrôle et ne peut pas être tenue responsable du contenu
            des pages web relatives à ces liens.
        </p>

        <h3 className="cgu__sub-title">Article 8 : Cookies</h3>
        <p className="cgu__article">
            Lors des visites sur le site, l’installation automatique d’un cookie
            sur le logiciel de navigation de l’Utilisateur peut survenir. Les
            cookies correspondent à de petits fichiers déposés temporairement
            sur le disque dur de l’ordinateur de l’Utilisateur. Ces cookies sont
            nécessaires pour assurer l’accessibilité et la navigation sur le
            site. Ces fichiers ne comportent pas d’informations personnelles et
            ne peuvent pas être utilisés pour l’identification d’une personne.
            En naviguant sur le site, l’Utilisateur accepte les cookies. Leur
            désactivation peut s’effectuer via les paramètres du logiciel de
            navigation.
        </p>

        <h3 className="cgu__sub-title">
            Article 9 : Publication par l’Utilisateur
        </h3>
        <p className="cgu__article">
            Le membre garde l’intégralité de ses droits de propriété
            intellectuelle. Toutefois, toute publication sur le site implique la
            délégation du droit non exclusif et gratuit à la société éditrice de
            représenter, reproduire, modifier, adapter, distribuer et diffuser
            la publication n’importe où et sur n’importe quel support pour la
            durée de la propriété intellectuelle. Cela peut se faire directement
            ou par l’intermédiaire d’un tiers autorisé. Cela concerne notamment
            le droit d’utilisation de la publication sur le web et sur les
            réseaux de téléphonie mobile. L’Utilisateur est tenu responsable de
            tout contenu qu’il met en ligne. L’Utilisateur s’engage à ne pas
            publier de contenus susceptibles de porter atteinte aux intérêts de
            tierces personnes. Toutes procédures engagées en justice par un
            tiers lésé à l’encontre du site devront être prises en charge par
            l’Utilisateur. La suppression ou la modification par le site du
            contenu de l’Utilisateur peut s’effectuer à tout moment, pour
            n’importe quelle raison et sans préavis.
        </p>

        <h3 className="cgu__sub-title">Article 10 : Durée du contrat</h3>
        <p className="cgu__article">
            Le présent contrat est valable pour une durée indéterminée. Le début
            de l’utilisation des services du site marque l’application du
            contrat à l’égard de l’Utilisateur.
        </p>

        <h3 className="cgu__sub-title">
            Article 11 : Droit applicable et juridiction compétente
        </h3>
        <p className="cgu__article">
            Le présent contrat est soumis à la législation française. L’absence
            de résolution à l’amiable des cas de litige entre les parties
            implique le recours aux tribunaux français compétents pour régler le
            contentieux.
        </p>
    </div>
);

CGU.propTypes = {
    isLogged: PropTypes.bool.isRequired,
};

export default CGU;
