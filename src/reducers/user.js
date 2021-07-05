 import jwt_decode from "jwt-decode";

import {
    CHANGE_FIELD,
    REFRESH_STATE,
    LOGOUT,
    DELETE_USER,
    SELECT_AUTHOR,
    CHANGE_EMAILS,
    DETACH_USER_MAIL,
    GET_ERROR,
} from "src/actions/user";
import {
    CHANGE_GROUP,
    SELECT_MEMBER,
    CHANGE_SELECT_TYPE,
} from "src/actions/group";

import { SEARCH_COMPANY } from "src/actions/company";

const initialState = {
    userId: 0,
    user: {},
    id: 0,
    lastname: "",
    firstname: "",
    func: "",
    email: "",
    role: "",
    password: "",
    passwordConfirm: "",
    company_id: 0,
    company: {},
    group_id: 0,
    logged: !!localStorage.getItem("token") ? jwt_decode(localStorage.getItem("token")).logged : false,
    selectedUserId: 0,
    selectedType: "",
    groups: [],
    users: [],
    message: "",
    emails: [],
    emailUser: "",
    error: {},
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case REFRESH_STATE:
            return {
                ...state,
                ...action.payload,
                userId: action.payload.id,
                company: action.payload.company,
                error: {},
            };
        case GET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        
        case SEARCH_COMPANY:
            return {
                ...state,
                company: { ...action.payload },
                company_id: action.payload.id,
                error: {},
            };
        case CHANGE_FIELD:
            return {
                ...state,
                [action.key]: action.value,
            };
        case LOGOUT:
            window.localStorage.removeItem("token");
            return {
                ...initialState,
            };

        case DELETE_USER:
            window.localStorage.removeItem("token");
            return {
                ...initialState,
                ...action.payload,
            };
        case CHANGE_GROUP:
            return {
                ...state,
                group_id: action.payload,
            };
        case SELECT_MEMBER:
            return {
                ...state,
                selectedUserId: action.selectedUserId,
            };
        case CHANGE_SELECT_TYPE:
            return { 
                ...state,
                selectedType: action.selectedType,
            };
        case SELECT_AUTHOR:
            return {
                ...state,
                selectedUserId: action.selectedUserId,
            };

        case CHANGE_EMAILS:
            return {
                ...state,
                emails: action.emails,
                emailUser: "",
            };

        case DETACH_USER_MAIL:
            return {
                ...state,
                emails: [...action.emails],
            };

        default:
            return state;
    }
};

export default reducer;
