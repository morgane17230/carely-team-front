import { connect } from "react-redux";
import CreateGroup from "src/components/Groups/CreateGroup";
import {
    onCreateGroup,
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
    error: state.user.error,
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

    onCreateGroup: () => {
        const action = onCreateGroup();
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
