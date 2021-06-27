import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { State } from "../../redux";
import Header from "./Header";
import { login, logout } from "../../redux/action-creators/userActionCreators";

const mapStateToProps = (state: State) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ login, logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
