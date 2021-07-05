import { connect } from 'react-redux';
import App from 'src/components/App';
import { rehydrate } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  role: state.user.role,
});

const mapDispatchToProps = (dispatch) => ({
  rehydrate: () => {
    const action = rehydrate();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
