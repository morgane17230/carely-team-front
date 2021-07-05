import { connect } from "react-redux";
import PasswordReset from "src/components/Header/PasswordReset";
import { changeField, resetPassword } from "src/actions/user";

const mapStateToProps = (state) => ({
    password: state.user.password,
    passwordConfirm: state.user.passwordConfirm,
    error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: () => {
        const action = changeField();
        dispatch(action);
    },

    resetPassword: () => {
        const action = resetPassword();
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
