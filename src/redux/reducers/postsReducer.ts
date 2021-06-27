import { PostsActionType } from "../action-types/postsActionTypes";
import { Post } from "../../types";
import { PostsActions } from "../actions/postsActions";

const initialState = {
    posts: [],
    loading: true,
    error: "",
};

interface State {
    posts: Post[];
    loading: boolean;
    error: string;
}

const postsReducer = (state: State = initialState, action: PostsActions) => {
    switch (action.type) {
        case PostsActionType.GET_POSTS_REQUEST:
            return {
                posts: [],
                error: "",
                loading: true,
            };
        case PostsActionType.GET_POSTS_SUCCESS:
            return {
                posts: action.payload,
                error: "",
                loading: false,
            };
        case PostsActionType.GET_POSTS_ERROR:
            return {
                posts: [],
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default postsReducer;
