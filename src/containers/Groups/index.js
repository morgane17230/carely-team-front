import { connect } from 'react-redux';
import Groups from 'src/components/Groups';
import {} from 'src/actions/user';

const mapStateToProps = (state) => ({
    userId: state.user.userId,
    company: state.user.company,
    groups: state.user.company.groups,
    role: state.user.role,
    groupId: state.user.group_id,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
