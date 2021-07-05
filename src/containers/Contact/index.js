import { connect } from "react-redux";
import Contact from "src/components/Contact";
import { sendMessage, changeField } from "src/actions/user";

const mapStateToProps = (state) => ({
    isLogged: state.user.logged,
    lastname: state.user.lastname,
    firstname: state.user.firstname,
    email: state.user.email,
    message: state.user.message,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: () => {
        const action = changeField();
        dispatch(action);
    },
    sendMessage: () => {
        const action = sendMessage();
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
