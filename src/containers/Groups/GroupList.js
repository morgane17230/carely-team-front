import { connect } from "react-redux";
import GroupList from "src/components/Groups/GroupList";
import { changeGroup, selectGroup, onDeleteGroup } from "src/actions/group";

const mapStateToProps = (state) => ({
    userId: state.user.userId,
    role: state.user.role,
    groups: state.user.company.groups,
    groupId: state.user.group_id,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeGroup: (value) => {
        const action = changeGroup(value);
        dispatch(action);
    },

    selectGroup: (value) => {
        const action = selectGroup(value);
        dispatch(action);
    },

    onDeleteGroup: (value) => {
        const action = onDeleteGroup(value);
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
