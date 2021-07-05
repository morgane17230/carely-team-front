import { connect } from 'react-redux';
import Legalnotice from 'src/components/Legalnotice';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Legalnotice);
