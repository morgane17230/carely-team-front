import { connect } from "react-redux";

import Messages from "src/components/Messages";

import {
  changeField
} from "src/actions/user";

const mapStateToProps = (state) => ({
  userId: state.user.userId,
  groups: state.user.groups,
  groupId: state.user.company_id,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: () => {
    const action = changeField();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
