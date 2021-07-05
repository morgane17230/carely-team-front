import api from "src/middlewares/api";
import jwt_decode from "jwt-decode";

import {
    ON_SUBSCRIBE,
    ON_LOGIN,
    refreshState,
    ON_MODIFY_USER,
    REHYDRATE,
    ON_DELETE_USER,
    deleteUser,
    ON_DETACH_USER,
    SEND_MESSAGE,
    ON_ADD_AUTHOR,
    ON_DELETE_AUTHOR,
    ON_SEND_USERS_MAILS,
    RESET_PASSWORD_CALL,
    RESET_PASSWORD,
    ON_SUBSCRIBE_OTHERS,
    getError,
} from "src/actions/user";

const user = (store) => (next) => async (action) => {
    switch (action.type) {

        // data persistence in state

        case REHYDRATE: {
            const token = localStorage.getItem("token");
            const decryptToken = jwt_decode(token);
            try {
                const rehydrateUser = await api.get(
                    `/user/${decryptToken.userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const actionSaveUser = refreshState(rehydrateUser.data);
                store.dispatch(actionSaveUser);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // user subscription (company account admin)

        case ON_SUBSCRIBE: {
            const { lastname, firstname, email, password, func, company } =
                store.getState().user;
            try {
                await api.post("/users", {
                    lastname,
                    firstname,
                    email,
                    func,
                    password,
                    company_id: company.id,
                    role: "admin",
                });
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // user subscription (simple user)

        case ON_SUBSCRIBE_OTHERS: {
            const { lastname, firstname, email, password, func, company } =
                store.getState().user;
            try {
                await api.post("/users", {
                    lastname,
                    firstname,
                    email,
                    func,
                    password,
                    company_id: company.id,
                    role: "user",
                });
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // User signIn

        case ON_LOGIN: {
            const {
                user: { email, password },
            } = store.getState();
            try {
                const logUser = await api.post("/user", {
                    email,
                    password,
                });
                const actionSaveUser = refreshState(logUser.data);
                api.defaults.headers.common.Authorization = `Bearer ${logUser.data.token}`;
                localStorage.setItem("token", logUser.data.token);
                store.dispatch(actionSaveUser);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Modify user profil informations

        case ON_MODIFY_USER: {
            const { userId, lastname, firstname, func, email } =
                store.getState().user;
            const token = localStorage.getItem("token");
            try {
                const updatedUser = await api.put(
                    `/user/${userId}`,
                    {
                        lastname,
                        firstname,
                        func,
                        email,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const actionModifyUser = refreshState(updatedUser.data);
                console.log(updatedUser.data);
                store.dispatch(actionModifyUser);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Delete user account

        case ON_DELETE_USER: {
            const { userId } = store.getState().user;
            try {
                const deletedUser = await api.delete(`/user/${userId}`);
                const actionDeleteUser = deleteUser(deletedUser.data);
                store.dispatch(actionDeleteUser);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Delete an employee account

        case ON_DETACH_USER: {
            const token = localStorage.getItem("token");
            try {
                await api.delete(`/user/${action.selectedUserId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const getUser = await api.get(
                    `/user/${store.getState().user.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const actionDetachUser = refreshState(getUser.data);
                store.dispatch(actionDetachUser);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Add an Author to a group

        case ON_ADD_AUTHOR: {
            const { userId, selectedUserId } = store.getState().user;
            const token = localStorage.getItem("token");
            try {
                await api.put(
                    `/user/${selectedUserId}`,
                    {
                        role: "author",
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const getUser = await api.get(`/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }, 
                });
                const actionAddedAuthor = refreshState(getUser.data);
                store.dispatch(actionAddedAuthor);
                console.log("addedAuthor middleware", getUser.data);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Delete an author

        case ON_DELETE_AUTHOR: {
            const { userId } = store.getState().user;
            const token = localStorage.getItem("token");
            try {
                await api.put(
                    `/user/${action.selectedUserId}`,
                    {
                        role: "user",
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const getUser = await api.get(`/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const actionDeleteAuthor = refreshState(getUser.data);
                store.dispatch(actionDeleteAuthor);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Send a message with contact form

        case SEND_MESSAGE: {
            const { lastname, firstname, email, message } =
                store.getState().user;
            console.log("message envoyé", lastname, firstname, email, message);
            try {
                await api.post("/contact", {
                    type: "contact",
                    lastname,
                    firstname,
                    email,
                    message,
                });
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Invite employees sending emails

        case ON_SEND_USERS_MAILS: {
            const { emails, company } = store.getState().user;
            try {
                await api.post("/invite", {
                    type: "invite",
                    emails,
                    company,
                });
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Send an email with reset password form link

        case RESET_PASSWORD_CALL: {
            const { emailUser } = store.getState().user;
            try {
                await api.post("/forgot", {
                    type: "forgotPassword",
                    email: emailUser,
                });
                const forgotUser = await api.post("/user/forgot", {
                    email: emailUser,
                });
                api.defaults.headers.common.Authorization = `Bearer ${forgotUser.data.token}`;
                localStorage.setItem("token", forgotUser.data.token);
                console.log(forgotUser);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // modify password in reset password form

        case RESET_PASSWORD: {
            const token = localStorage.getItem("token");
            const decryptToken = jwt_decode(token);
            const { password } = store.getState().user;
            try {
                await api.put(
                    `/user/${decryptToken.userId}`,
                    {
                        password: password,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                await api.post("/reset", {
                    type: "resetPassword",
                    email: decryptToken.userEmail,
                });
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        default:
            next(action);
    }
};

export default user;
