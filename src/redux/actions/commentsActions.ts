import { Comment } from "../../types";
import { CommentsActionType } from "../action-types/commentsActionTypes";

interface GetCommentsRequestAction {
    type: CommentsActionType.GET_COMMENTS_REQUEST;
}

interface GetCommentsSuccessAction {
    type: CommentsActionType.GET_COMMENTS_SUCCESS;
    payload: Comment[];
}

interface GetCommentsErrorAction {
    type: CommentsActionType.GET_COMMENTS_ERROR;
    payload: string;
}

interface AddCommentRequestAction {
    type: CommentsActionType.ADD_COMMENT_REQUEST;
}

interface AddCommentSuccessAction {
    type: CommentsActionType.ADD_COMMENT_SUCCESS;
    payload: Comment;
}

interface AddCommentErrorAction {
    type: CommentsActionType.ADD_COMMENT_ERROR;
    payload: string;
}

export type CommentsActions =
    | GetCommentsRequestAction
    | GetCommentsSuccessAction
    | GetCommentsErrorAction
    | AddCommentRequestAction
    | AddCommentSuccessAction
    | AddCommentErrorAction;
