import { connect } from 'react-redux';
import CGU from 'src/components/CGU';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CGU);
