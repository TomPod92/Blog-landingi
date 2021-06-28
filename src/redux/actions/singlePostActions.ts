import { Post } from "../../types";
import { SinglePostActionType } from "../action-types/singlePostActionTypes";

interface GetSinglePostsRequestAction {
    type: SinglePostActionType.GET_SINGLE_POST_REQUEST;
}

interface GetSinglePostsSuccessAction {
    type: SinglePostActionType.GET_SINGLE_POST_SUCCESS;
    payload: Post;
}

interface GetSinglePostsErrorAction {
    type: SinglePostActionType.GET_SINGLE_POST_ERROR;
    payload: string;
}

export type SinglePostActions =
    | GetSinglePostsRequestAction
    | GetSinglePostsSuccessAction
    | GetSinglePostsErrorAction;
