import { Comment } from "../../types";
import { CommentsActionType } from "../action-types/commentsActionTypes";
import { CommentsActions } from "../actions/commentsActions";
import { Reducer } from "redux";

const initialState = {
    comments: [],
    loading: true,
    error: "",
};

interface State {
    comments: Comment[];
    loading: boolean;
    error: string;
}

const commentsReducer: Reducer<State, CommentsActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CommentsActionType.GET_COMMENTS_REQUEST:
            return {
                comments: [],
                error: "",
                loading: true,
            };
        case CommentsActionType.GET_COMMENTS_SUCCESS:
            return {
                comments: [...state.comments, ...action.payload],
                error: "",
                loading: false,
            };
        case CommentsActionType.GET_COMMENTS_ERROR:
            return {
                comments: [],
                error: action.payload,
                loading: false,
            };
        case CommentsActionType.ADD_COMMENT_REQUEST:
            return {
                comments: state.comments,
                error: "",
                loading: true,
            };
        case CommentsActionType.ADD_COMMENT_SUCCESS:
            return {
                error: "",
                loading: false,
                comments: [...state.comments, action.payload],
            };
        case CommentsActionType.ADD_COMMENT_ERROR:
            return {
                error: action.payload,
                loading: false,
                comments: [],
            };
        default:
            return state;
    }
};

export default commentsReducer;
