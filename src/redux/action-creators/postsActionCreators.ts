import { Dispatch } from "redux";
import { PostsActionType } from "../action-types/postsActionTypes";
import { PostsActions } from "../actions/postsActions";

export const getPosts = () => async (dispatch: Dispatch<PostsActions>) => {
    dispatch({ type: PostsActionType.GET_POSTS_REQUEST });
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        dispatch({ type: PostsActionType.GET_POSTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PostsActionType.GET_POSTS_ERROR,
            payload: "error fetching posts",
        });
    }
};
