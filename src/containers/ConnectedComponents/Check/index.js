import { connect } from 'react-redux';
import Check from 'src/components/ConnectedComponent/Check';
import { changeField } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  inputValue: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (newValue) => {
    const action = changeField(ownProps.name, newValue);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Check);
