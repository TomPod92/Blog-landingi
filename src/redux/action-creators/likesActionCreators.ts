import { Dispatch } from "redux";
import { Like } from "../../types";
import { LikesActionType } from "../action-types/likesActionTypes";
import { LikesActions } from "../actions/likesActions";

export const like = (like: Like) => (dispatch: Dispatch<LikesActions>) => {
    dispatch({ type: LikesActionType.LIKE_POST_REQUEST });
    dispatch({ type: LikesActionType.LIKE_POST_SUCCESS, payload: like });
};

export const unlike = (like: Like) => (dispatch: Dispatch<LikesActions>) => {
    dispatch({ type: LikesActionType.UNLIKE_POST_REQUEST });
    dispatch({ type: LikesActionType.UNLIKE_POST_SUCCESS, payload: like });
};
