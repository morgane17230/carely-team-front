import { connect } from "react-redux";
import Users from "src/components/Groups/Users";
import {} from "src/actions/user";
import { onDeleteMember, onAddMember, selectMember } from "src/actions/group";

const mapStateToProps = (state) => ({
    userId: state.user.userId,
    groups: state.user.company.groups,
    users: state.user.company.users,
    groupId: state.user.group_id,
    selectedUserId: state.user.selectedUserId,
});

const mapDispatchToProps = (dispatch) => ({
    onAddMember: (selectedUserId) => {
        const action = onAddMember(selectedUserId);
        dispatch(action);
    },

    onSelectMember: (selectedUserId) => {
        const action = selectMember(selectedUserId);
        dispatch(action);
    },
    onDeleteMember: (value) => {
        const action = onDeleteMember(value);
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
