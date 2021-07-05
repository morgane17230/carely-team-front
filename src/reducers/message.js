import {
    CHANGE_FIELD,
    REFRESH_STATE,
} from "src/actions/user";

const initialState = {
    message: [],
    content: "",
    id: 0,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_FIELD:
            return {
                ...state,
                [action.key]: action.value,
            };
        case REFRESH_STATE:
            return {
                ...state,
                content: "",
            };
        default:
            return state;
    }
};

export default reducer;
