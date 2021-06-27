import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { State } from "../../redux";
import SinglePost from "./SinglePostPage";
import {
    getComments,
    addComment,
} from "../../redux/action-creators/commentsActionCreators";
import { like, unlike } from "../../redux/action-creators/likesActionCreators";

const mapStateToProps = (state: State, props: any) => {
    const like = state.likes.likes.find((current) => {
        const postIdMatches =
            current.postId === parseInt(props.match.params.postId);
        const userIdMatches = current.userId === state.user.user.id;

        return postIdMatches && userIdMatches;
    });

    return {
        user: state.user.user,
        post: state.posts.posts.find(
            (current) => current.id === parseInt(props.match.params.postId)
        ),
        comments: state.comments.comments,
        commentsLoading: state.comments.loading,
        commentsError: state.comments.error,
        yourLike: like !== undefined,
        likesLoading: state.likes.loading,
        likesError: state.likes.error,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ getComments, addComment, like, unlike }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
