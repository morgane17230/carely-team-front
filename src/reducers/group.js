import {
    CHANGE_FIELD,
} from "src/actions/user";

const initialState = {
    group: {},
    id: 0,
    title: "",
    type: "",
    end_time: "",
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_FIELD:
            return {
                ...state,
                [action.key]: action.value,
            };
        default:
            return state;
    }
};

export default reducer;
