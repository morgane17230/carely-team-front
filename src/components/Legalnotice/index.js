import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMenuLeft } from "@mdi/js";

import "src/styles/legalnotice.scss";

const Legalnotice = ({ isLogged }) => (
    <div className="legalnotice">
        {isLogged && (
            <Link to="/profil" className="legalnotice__header">
                <Icon
                    path={mdiMenuLeft}
                    title="User Profile"
                    size={1}
                />
                Profil
            </Link>
        )}
        <h1 className="legalnotice__title">Mentions Légales</h1>
        <p className="legalnotice__article">
            Merci de lire avec attention les différentes modalités d’utilisation
            du présent site avant d’y parcourir ses pages. En vous connectant
            sur ce site, vous acceptez sans réserves les présentes modalités.
            Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin
            2004 pour la confiance dans l’économie numérique, les responsables
            du présent site internet
            <Link to="http://www.carelyteam.me">www.carelyteam.me</Link> sont :
        </p>

        <h2 className="legalnotice__sub-title">Editeur du site :</h2>

        <ul className="legalnotice__article">
            <li>Nom : GAMBIS</li>
            <li>Prénom : Morgane</li>
            <li>8 TER RUE DU GRAND MOULIN 17230 ANDILLY</li>
            <li>Email : contact@carelyteam.me</li>
            <li>
                Site Web :
                <Link to="http://www.carelyteam.me">www.carelyteam.me</Link>
            </li>
        </ul>

        <h2 className="legalnotice__sub-title">Hebergeur :</h2>

        <ul className="legalnotice__article">
            <li>Hébergeur : Amazon Web Services LLC</li>
            <li>P.O. Box 81226 Seattle, WA 98108-1226</li>
            <li>
                Site Web :{" "}
                <Link to="http://http://aws.amazon.com">
                    http://aws.amazon.com
                </Link>
            </li>
        </ul>

        <h2 className="legalnotice__sub-title">Développement :</h2>

        <ul className="legalnotice__article">
            <li>Nom : GAMBIS</li>
            <li>Prénom : Morgane</li>
            <li>8 TER RUE DU GRAND MOULIN 17230 ANDILLY</li>
        </ul>
        <h2 className="legalnotice__sub-title">Conditions d'utilisation :</h2>
        <p className="legalnotice__article">
            Ce site
            <Link to="http://www.carelyteam.me"> www.carelyteam.me </Link> est
            proposé en différents langages web (HTML, HTML5, Javascript, CSS,
            etc…) pour un meilleur confort d'utilisation et un graphisme plus
            agréable, nous vous recommandons de recourir à des navigateurs
            modernes comme Internet explorer, Safari, Firefox, Google Chrome,
            etc…. GAMBIS Morgane met en œuvre tous les moyens dont elle dispose,
            pour assurer une information fiable et une mise à jour fiable de ses
            sites internet. Toutefois, des erreurs ou omissions peuvent
            survenir. L'internaute devra donc s'assurer de l'exactitude des
            informations auprès de , et signaler toutes modifications du site
            qu'il jugerait utile. n'est en aucun cas responsable de
            l'utilisation faite de ces informations, et de tout préjudice direct
            ou indirect pouvant en découler.
        </p>
        <h2 className="legalnotice__sub-title">Cookies :</h2>
        <p className="legalnotice__article">
            Le site{" "}
            <Link to="http://www.carelyteam.me"> www.carelyteam.me </Link>
            peut-être amené à vous demander l’acceptation des cookies pour des
            besoins de statistiques et d'affichage. Un cookies est une
            information déposée sur votre disque dur par le serveur du site que
            vous visitez. Il contient plusieurs données qui sont stockées sur
            votre ordinateur dans un simple fichier texte auquel un serveur
            accède pour lire et enregistrer des informations . Certaines parties
            de ce site ne peuvent être fonctionnelles sans l’acceptation de
            cookies.
        </p>
        <h2 className="legalnotice__sub-title">Liens Hypertextes :</h2>
        <p className="legalnotice__article">
            Les sites internet de peuvent offrir des liens vers d’autres sites
            internet ou d’autres ressources disponibles sur Internet. GAMBIS
            Morgane ne dispose d'aucun moyen pour contrôler les sites en
            connexion avec ses sites internet. ne répond pas de la disponibilité
            de tels sites et sources externes, ni ne la garantit. Elle ne peut
            être tenue pour responsable de tout dommage, de quelque nature que
            ce soit, résultant du contenu de ces sites ou sources externes, et
            notamment des informations, produits ou services qu’ils proposent,
            ou de tout usage qui peut être fait de ces éléments. Les risques
            liés à cette utilisation incombent pleinement à l'internaute, qui
            doit se conformer à leurs conditions d'utilisation. Les
            utilisateurs, les abonnés et les visiteurs des sites internet de ne
            peuvent mettre en place un hyperlien en direction de ce site sans
            l'autorisation expresse et préalable de GAMBIS Morgane. Dans
            l'hypothèse où un utilisateur ou visiteur souhaiterait mettre en
            place un hyperlien en direction d’un des sites internet de GAMBIS
            Morgane, il lui appartiendra d'adresser un email accessible sur le
            site afin de formuler sa demande de mise en place d'un hyperlien.
            GAMBIS Morgane se réserve le droit d’accepter ou de refuser un
            hyperlien sans avoir à en justifier sa décision.
        </p>
        <h2 className="legalnotice__sub-title">Services fournis :</h2>
        <p className="legalnotice__article">
            L'ensemble des activités ainsi que ses informations sont présentés
            sur notre site
            <a href="http://www.carelyteam.me">www.carelyteam.me</a>. GAMBIS
            Morgane s’efforce de fournir sur le site www.carelyteam.me des
            informations aussi précises que possible. les renseignements
            figurant sur le site
            <Link to="http://www.carelyteam.me"> www.carelyteam.me </Link> ne
            sont pas exhaustifs et les photos non contractuelles. Ils sont
            donnés sous réserve de modifications ayant été apportées depuis leur
            mise en ligne. Par ailleurs, tous les informations indiquées sur le
            site www.carelyteam.me sont données à titre indicatif, et sont
            susceptibles de changer ou d’évoluer sans préavis.
        </p>
        <h2 className="legalnotice__sub-title">
            Limitations contractuelles sur les données :
        </h2>
        <p className="legalnotice__article">
            Les informations contenues sur ce site sont aussi précises que
            possible et le site remis à jour à différentes périodes de l’année,
            mais peut toutefois contenir des inexactitudes ou des omissions. Si
            vous constatez une lacune, erreur ou ce qui parait être un
            dysfonctionnement, merci de bien vouloir le signaler par email, à
            l’adresse contact@carelyteam.me, en décrivant le problème de la
            manière la plus précise possible (page posant problème, type
            d’ordinateur et de navigateur utilisé, …). Tout contenu téléchargé
            se fait aux risques et périls de l'utilisateur et sous sa seule
            responsabilité. En conséquence, ne saurait être tenu responsable
            d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou
            d'une quelconque perte de données consécutives au téléchargement. De
            plus, l’utilisateur du site s’engage à accéder au site en utilisant
            un matériel récent, ne contenant pas de virus et avec un navigateur
            de dernière génération mis-à-jour Les liens hypertextes mis en place
            dans le cadre du présent site internet en direction d'autres
            ressources présentes sur le réseau Internet ne sauraient engager la
            responsabilité de GAMBIS Morgane.
        </p>
        <h2 className="legalnotice__sub-title">Propriété intellectuelle :</h2>
        <p className="legalnotice__article">
            Tout le contenu du présent sur le site{" "}
            <Link to="http://www.carelyteam.me"> www.carelyteam.me </Link>,
            incluant, de façon non limitative, les graphismes, images, textes,
            vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise
            en forme sont la propriété exclusive de la GAMBIS Morgane à
            l'exception des marques, logos ou contenus appartenant à d'autres
            sociétés partenaires ou auteurs. Toute reproduction, distribution,
            modification, adaptation, retransmission ou publication, même
            partielle, de ces différents éléments est strictement interdite sans
            l'accord exprès par écrit de GAMBIS Morgane. Cette représentation ou
            reproduction, par quelque procédé que ce soit, constitue une
            contrefaçon sanctionnée par les articles L.335-2 et suivants du Code
            de la propriété intellectuelle. Le non-respect de cette interdiction
            constitue une contrefaçon pouvant engager la responsabilité civile
            et pénale du contrefacteur. En outre, les propriétaires des Contenus
            copiés pourraient intenter une action en justice à votre encontre.
        </p>
        <h2 className="legalnotice__sub-title">Déclaration à la CNIL :</h2>
        <p className="legalnotice__article">
            Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi
            2004-801 du 6 août 2004 relative à la protection des personnes
            physiques à l'égard des traitements de données à caractère
            personnel) relative à l'informatique, aux fichiers et aux libertés,
            ce site n'a pas fait l'objet d'une déclaration auprès de la
            Commission nationale de l'informatique et des libertés (
            <Link to="http://www.cnil.fr/"> www.cnil.fr </Link>).
            <h2 className="legalnotice__sub-title">Litiges : </h2>
            <p>
                Les présentes conditions du site
                <Link to="http://www.carelyteam.me">
                    www.carelyteam.me
                </Link>{" "}
                sont régies par les lois françaises et toute contestation ou
                litiges qui pourraient naître de l'interprétation ou de
                l'exécution de celles-ci seront de la compétence exclusive des
                tribunaux. La langue de référence, pour le règlement de
                contentieux éventuels, est le français.
            </p>
            <h2 className="legalnotice__sub-title">Données Personnelles : </h2>
            <p>
                De manière générale, vous n’êtes pas tenu de nous communiquer
                vos données personnelles lorsque vous visitez notre site
                Internet
                <Link to="http://www.carelyteam.me">www.carelyteam.me</Link>.
                Cependant, ce principe comporte certaines exceptions. En effet,
                pour certains services proposés par notre site, vous pouvez être
                amenés à nous communiquer certaines données telles que : votre
                nom, votre fonction, le nom de votre société, votre adresse
                électronique, et votre numéro de téléphone. Tel est le cas
                lorsque vous remplissez le formulaire qui vous est proposé en
                ligne, dans la rubrique « contact ». Dans tous les cas, vous
                pouvez refuser de fournir vos données personnelles. Dans ce cas,
                vous ne pourrez pas utiliser les services du site, notamment
                celui de solliciter des renseignements sur nos activités, ou de
                recevoir les lettres d’information. Enfin, nous pouvons
                collecter de manière automatique certaines informations vous
                concernant lors d’une simple navigation sur notre site Internet,
                notamment : des informations concernant l’utilisation de notre
                site, comme les zones que vous visitez et les services auxquels
                vous accédez, votre adresse IP, le type de votre navigateur, vos
                temps d'accès. De telles informations sont utilisées
                exclusivement à des fins de statistiques internes, de manière à
                améliorer la qualité des services qui vous sont proposés. Les
                bases de données sont protégées par les dispositions de la loi
                du 1er juillet 1998 transposant la directive 96/9 du 11 mars
                1996 relative à la protection juridique des bases de données.
            </p>
        </p>
    </div>
);

Legalnotice.propTypes = {
    isLogged: PropTypes.bool.isRequired,
};

export default Legalnotice;
