import { connect } from "react-redux";
import Modify from "src/components/Profil/Modify";
import { changeField, onModifyUser } from "src/actions/user";

const mapStateToProps = (state) => ({
    company: state.user.company,
    lastname: state.user.lastname,
    firstname: state.user.firstname,
    func: state.user.func,
    email: state.user.email,
    error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: () => {
        const action = changeField();
        dispatch(action);
    },

    onModifyUser: () => {
        const action = onModifyUser();
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modify);
