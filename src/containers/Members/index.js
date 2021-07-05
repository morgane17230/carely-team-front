import { connect } from "react-redux";

// import du composant members
import Members from "src/components/Members";

// import des méthodes déclarées dans les actions-types 
// du fichier actions/user
import {
    changeField,
    onDetachUser,
    onAddAuthor,
    selectAuthor,
    onDeleteAuthor,
    changeEmails,
    onSendUsersMail,
    detachUserMail,
} from "src/actions/user";

// props contenues dans le state, définies et initialisées 
// dans le reducer "user"
const mapStateToProps = (state) => ({
    selectedUserId: state.user.selectedUserId,
    users: state.user.company.users,
    email: state.user.email,
    userId: state.user.userId,
    emails: state.user.emails,
    emailUser: state.user.emailUser,
    error: state.user.error,
});

// méthode permettant le contrôle des champs des composants
// contrôlés ConnectedComponents (formulaire invitations)
const mapDispatchToProps = (dispatch) => ({
    changeField: () => {
        const action = changeField();
        dispatch(action);
    },

    // méthode permettant de supprimer un employé de l'établissement
    onDetachUser: (value) => {
        const action = onDetachUser(value);
        dispatch(action);
    },

    // méthode permettant l'attribution d'une valeur au champ select
    // d'ajout d'un auteur
    onSelectAuthor: (selectedUserId) => {
        const action = selectAuthor(selectedUserId);
        dispatch(action);
    },

    // méthode permettant le changement de rôle d'user à author grâce
    // à la méthode précédente
    onAddAuthor: (selectedUserId) => {
        const action = onAddAuthor(selectedUserId);
        dispatch(action);
    },

    // méthode permettant le changement de rôle d'author à user et de
    // supprimer un auteur de la liste des auteurs
    onDeleteAuthor: (value) => {
        const action = onDeleteAuthor(value);
        dispatch(action);
    },

    // méthode permettant la mise à jour de la liste des emails dans le state lors
    // de la saisie dans le champs du formulaire d'invitation par email
    onChangeEmails: (emails) => {
        const action = changeEmails(emails);
        dispatch(action);
    },

    // méthode d'envoi des invitations par email lors de la validation du formulaire
    onSendUsersMail: (emails) => {
        const action = onSendUsersMail(emails);
        dispatch(action);
    },

    // méthode permettant la mise à jour de la liste des emails dans le state lors
    // de la suppression d'un email de cette liste
    onDetachUserMail: (emails) => {
        const action = detachUserMail(emails);
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
