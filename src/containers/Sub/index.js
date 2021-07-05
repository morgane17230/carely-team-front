import { connect } from "react-redux";
import Sub from "src/components/Sub";
import { onSearchCompany, searchCompany } from "src/actions/company";
import { onSubscribe, changeField } from "src/actions/user";

const mapStateToProps = (state) => ({
    company: state.user.company,
    lastname: state.user.lastname,
    firstname: state.user.firstname,
    func: state.user.func,
    email: state.user.email,
    password: state.user.password,
    passwordConfirm: state.user.passwordConfirm,
    error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: () => {
        const action = changeField();
        dispatch(action);
    },

    onSearchCompany: (value) => {
        console.log(value);
        const action = onSearchCompany(value);
        dispatch(action);
    },

    searchCompany: (value) => {
        console.log(value);
        const action = searchCompany(value);
        dispatch(action);
    },

    onSubscribe: () => {
        const action = onSubscribe();
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sub);
