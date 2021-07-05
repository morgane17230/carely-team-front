export const REFRESH_STATE = "REFRESH_STATE";
export const REHYDRATE = "REHYDRATE";
export const ON_SUBSCRIBE = "ON_SUBSCRIBE";
export const ON_SUBSCRIBE_OTHERS = "ON_SUBSCRIBE_OTHERS";
export const ADD_USER = "ADD_USER";
export const CHANGE_FIELD = "CHANGE_FIELD";
export const ON_LOGIN = "ON_LOGIN";
export const LOGOUT = "LOGOUT";
export const ON_MODIFY_USER = "ON_MODIFY_USER";
export const ON_DELETE_USER = "ON_DELETE_USER";
export const DELETE_USER = "DELETE_USER";
export const ON_DETACH_USER = "ON_DETACH_USER";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const ON_ADD_AUTHOR = "ON_ADD_AUTHOR";
export const SELECT_AUTHOR = "SELECT_AUTHOR";
export const ON_DELETE_AUTHOR = "ON_DELETE_AUTHOR";
export const CHANGE_EMAILS = "CHANGE_EMAILS";
export const ON_SEND_USERS_MAILS = "ON_SEND_USERS_MAILS";
export const DETACH_USER_MAIL = "DETACH_USER_MAIL";
export const RESET_PASSWORD_CALL = "RESET_PASSWORD_CALL";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const GET_ERROR = "GET_ERROR";

// Select group to modify token
export const refreshState = (payload) => ({
    type: REFRESH_STATE,
    payload,
});

// backend erros recovery
export const getError = (payload) => ({
    type: GET_ERROR,
    payload,
});

// data persistence in state
export const rehydrate = () => ({
    type: REHYDRATE,
});

// user subscription (admin)
export const onSubscribe = (payload) => ({
    type: ON_SUBSCRIBE,
    payload,
});

// user subscription (user)
export const onSubscribeOthers = () => ({
    type: ON_SUBSCRIBE_OTHERS,
});

// Modify form fields content
export const changeField = (key, value) => ({
    type: CHANGE_FIELD,
    key,
    value,
});

// User signIn
export const onLogin = () => ({
    type: ON_LOGIN,
});

// User logout
export const logout = () => ({
    type: LOGOUT,
});

// Modify user profil informations
export const onModifyUser = () => ({
    type: ON_MODIFY_USER,
});

// Delete user account
export const onDeleteUser = () => ({
    type: ON_DELETE_USER,
});

// Delete user account
export const deleteUser = () => ({
    type: DELETE_USER,
});


// Delete an employee account
export const onDetachUser = (selectedUserId) => ({
    type: ON_DETACH_USER,
    selectedUserId,
});

// Send a message with contact form
export const sendMessage = () => ({
    type: SEND_MESSAGE,
});

// Add an author
export const onAddAuthor = (selectedUserId) => ({
    type: ON_ADD_AUTHOR,
    selectedUserId,
});

// Select an employee to add author
export const selectAuthor = (selectedUserId) => ({
    type: SELECT_AUTHOR,
    selectedUserId,
});

// Delete an author
export const onDeleteAuthor = (selectedUserId) => ({
    type: ON_DELETE_AUTHOR,
    selectedUserId,
});

// Invite employees sending emails
export const onSendUsersMail = (emails) => ({
    type: ON_SEND_USERS_MAILS,
    emails,
});

export const changeEmails = (emails) => ({
    type: CHANGE_EMAILS,
    emails,
});

// Delete an email from email list (employee invitation)
export const detachUserMail = (emails) => ({
    type: DETACH_USER_MAIL,
    emails,
});

// Send an email with reset password form link
export const resetPasswordCall = () => ({
    type: RESET_PASSWORD_CALL,
});

// modify password in reset password form
export const resetPassword = () => ({
    type: RESET_PASSWORD,
});
