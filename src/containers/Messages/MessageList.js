import { connect } from "react-redux";

import MessageList from "src/components/Messages/MessageList";

import {
    onModifyMSG,
    onDeleteMSG,
    onCreateMSG,
} from "src/actions/message";
import { changeField } from "src/actions/user";
import { changeGroup, selectGroup } from "src/actions/group";

const mapStateToProps = (state) => ({
    userId: state.user.userId,
    groups: state.user.groups,
    content: state.message.content,
    groupId: state.user.group_id, 
});

const mapDispatchToProps = (dispatch) => ({
    changeField: () => {
        const action = changeField();
        dispatch(action);
    },

    onCreateMSG: (value) => {
        const action = onCreateMSG(value);
        dispatch(action);
    },

    onModifyMSG: (value) => {
        const action = onModifyMSG(value);
        dispatch(action);
    },

    onDeleteMSG: (value) => {
        const action = onDeleteMSG(value);
        dispatch(action);
    },

    selectGroup: (value) => {
        const action = selectGroup(value);
        dispatch(action);
    },

    onChangeGroup: (value) => {
        const action = changeGroup(value);
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
