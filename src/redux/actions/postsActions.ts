import { Post } from "../../types";
import { PostsActionType } from "../action-types/postsActionTypes";

interface GetPostsRequestAction {
    type: PostsActionType.GET_POSTS_REQUEST;
}

interface GetPostsSuccessAction {
    type: PostsActionType.GET_POSTS_SUCCESS;
    payload: Post[];
}

interface GetPostsErrorAction {
    type: PostsActionType.GET_POSTS_ERROR;
    payload: string;
}

export type PostsActions =
    | GetPostsRequestAction
    | GetPostsSuccessAction
    | GetPostsErrorAction;
