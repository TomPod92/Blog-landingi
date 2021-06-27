import { Like } from "../../types";
import { LikesActionType } from "../action-types/likesActionTypes";

interface LikePostRequestAction {
    type: LikesActionType.LIKE_POST_REQUEST;
}

interface LikePostSuccessAction {
    type: LikesActionType.LIKE_POST_SUCCESS;
    payload: Like;
}

interface LikePostErrorAction {
    type: LikesActionType.LIKE_POST_ERROR;
    payload: string;
}

interface UnlikePostRequestAction {
    type: LikesActionType.UNLIKE_POST_REQUEST;
}

interface UnlikePostSuccessAction {
    type: LikesActionType.UNLIKE_POST_SUCCESS;
    payload: Like;
}

interface UnlikePostErrorAction {
    type: LikesActionType.UNLIKE_POST_ERROR;
    payload: string;
}

export type LikesActions =
    | LikePostRequestAction
    | LikePostSuccessAction
    | LikePostErrorAction
    | UnlikePostRequestAction
    | UnlikePostSuccessAction
    | UnlikePostErrorAction;
