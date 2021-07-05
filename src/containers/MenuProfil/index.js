import { connect } from "react-redux";
import MenuProfil from "src/components/MenuProfil";

const mapStateToProps = (state) => ({
    role: state.user.role,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MenuProfil);
