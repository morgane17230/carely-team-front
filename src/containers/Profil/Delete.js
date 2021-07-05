import { connect } from 'react-redux';
import Delete from 'src/components/Profil/Delete';
import { onDeleteUser, deleteUser } from 'src/actions/user';

const mapStateToProps = (state) => ({
  userId: state.user.userId,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteUser: (value) => {
    const action = onDeleteUser(value);
    dispatch(action);
  },

  deleteUser: () => {
    const action = deleteUser();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
