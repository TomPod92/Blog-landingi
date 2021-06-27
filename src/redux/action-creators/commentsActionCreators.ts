import { Dispatch } from "redux";
import { Comment } from "../../types";
import { CommentsActionType } from "../action-types/commentsActionTypes";
import { CommentsActions } from "../actions/commentsActions";

export const getComments =
    (postId: number) => async (dispatch: Dispatch<CommentsActions>) => {
        dispatch({ type: CommentsActionType.GET_COMMENTS_REQUEST });
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
            );
            const data = await res.json();

            dispatch({
                type: CommentsActionType.GET_COMMENTS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: CommentsActionType.GET_COMMENTS_ERROR,
                payload: "error fetching comments",
            });
        }
    };

export const addComment =
    (comment: Comment) => (dispatch: Dispatch<CommentsActions>) => {
        dispatch({ type: CommentsActionType.ADD_COMMENT_REQUEST });

        dispatch({
            type: CommentsActionType.ADD_COMMENT_SUCCESS,
            payload: comment,
        });
    };
