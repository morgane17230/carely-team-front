import { connect } from "react-redux";
import Reset from "src/components/Header/Reset";
import { changeField, resetPasswordCall } from "src/actions/user";

const mapStateToProps = (state) => ({
    emailUser: state.user.emailUser,
    error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: () => {
        const action = changeField();
        dispatch(action);
    },

    resetPasswordCall: () => { 
        const action = resetPasswordCall();
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
