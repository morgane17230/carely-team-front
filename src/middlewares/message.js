// import paramètre de connexion à l'API
import api from "src/middlewares/api";

// import des actions des actions-type du fichier actions/user
import { refreshState, getError } from "src/actions/user";

// import des actions des actions-type du fichier actions/message
import {
    ON_CREATE_MSG,
    ON_MODIFY_MSG,
    ON_DELETE_MSG,
} from "src/actions/message";

const message = (store) => (next) => async (action) => {
    switch (action.type) {

        // Création d'un message

        case ON_CREATE_MSG: {
            // importation des données nécessaires à la création de messages
            // directement du state
            const { content } = store.getState().message;
            const { id, group_id } = store.getState().user;
            try {
                // création du message
                await api.post(`/messages`, {
                    content,
                    group_id,
                    user_id: id,
                });
                // mise à jour de l'user avec le nouveau message
                const createdMessage = await api.get(
                    `/user/${store.getState().user.id}`
                );
                // dispatch de l'action dans le store
                const actionCreateMsg = refreshState(createdMessage.data);
                store.dispatch(actionCreateMsg);
            } catch (error) {
                // récupération de l'erreur venant de l'API dans le state
                // afin de l'afficher à l'utilisateur
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Modification d'un message

        case ON_MODIFY_MSG: {
            // importation des données nécessaires à la création de messages
            // directement du state
            const { content } = store.getState().message;

            try {
                // modification du message
                await api.put(`/message/${action.modifyPayload}`, {
                    content,
                });
                // mise à jour de l'user avec le message modifié
                const modifiedMSG = await api.get(
                    `/user/${store.getState().user.id}`
                );
                // dispatch de l'action dans le store
                const actionModifieMsg = refreshState(modifiedMSG.data);
                store.dispatch(actionModifieMsg);
            } catch (error) {
                // récupération de l'erreur venant de l'API dans le state
                // afin de l'afficher à l'utilisateur
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Suppression d'un message

        case ON_DELETE_MSG: {
            try {
                // suppression du message
                await api.delete(`/message/${action.deletePayload}`);
                // mise à jour de l'user sans le message supprimé
                const deletedMSG = await api.get(
                    `/user/${store.getState().user.id}`
                );
                // dispatch de l'action dans le store
                const actionOnDeleteMsg = refreshState(deletedMSG.data);
                store.dispatch(actionOnDeleteMsg);
            } catch (error) {
                // récupération de l'erreur venant de l'API dans le state
                // afin de l'afficher à l'utilisateur
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        default:
            next(action);
    }
};

export default message;
