import { connect } from "react-redux";
import Header from "src/components/Header";
import {
    onLogin,
    changeField,
    logout,
    rehydrate,
} from "src/actions/user";

const mapStateToProps = (state) => ({
    isLogged: state.user.logged,
    loggedMessage: `Bienvenue ${state.user.firstname} ${state.user.lastname}`,
    email: state.user.email,
    password: state.user.password,
    error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: () => {
        const action = changeField();
        dispatch(action);
    },

    onLogin: () => {
        const action = onLogin();
        dispatch(action);
    },

    handleLogout: () => {
        dispatch(logout());
    },

    rehydrate: () => {
        const action = rehydrate();
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
