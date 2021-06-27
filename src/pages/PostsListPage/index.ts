import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { State } from "../../redux";
import PostsListPage from "./PostsListPage";
import { getPosts } from "../../redux/action-creators/postsActionCreators";

const mapStateToProps = (state: State) => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ getPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsListPage);
