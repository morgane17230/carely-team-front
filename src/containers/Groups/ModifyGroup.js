/* eslint-disable import/no-unresolved */
import { connect } from "react-redux";
import ModifyGroup from "src/components/Groups/ModifyGroup";
import {
    onModifyGroup,
    changeSelectType,
    selectMember,
} from "src/actions/group";
import { changeField } from "src/actions/user";

const mapStateToProps = (state) => ({
    title: state.group.title,
    end_time: state.group.end_time,
    email: state.user.email,
    selectedType: state.user.selectedType,
    selectedUserId: state.user.userId,
    userId: state.user.userId,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: () => {
        const action = changeField();
        dispatch(action);
    },

    onSelect: (selectedType) => {
        const action = changeSelectType(selectedType);
        dispatch(action);
    },

    onSelectMember: (selectedUserId) => {
        const action = selectMember(selectedUserId);
        dispatch(action);
    },

    onModifyGroup: (value) => {
        const action = onModifyGroup(value);
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyGroup);
