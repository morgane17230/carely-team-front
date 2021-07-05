import { connect } from 'react-redux';

// profil component import
import Profil from 'src/components/Profil';

//  props import from state (reducer)
const mapStateToProps = (state) => ({
  company: state.user.company,
  lastname: state.user.lastname,
  firstname: state.user.firstname,
  func: state.user.func,
  email: state.user.email,
  password: state.user.password,
});

// methods to dispatch in the store
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
