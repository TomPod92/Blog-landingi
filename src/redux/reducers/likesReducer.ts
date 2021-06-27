import { Like } from "../../types";
import { LikesActionType } from "../action-types/likesActionTypes";
import { LikesActions } from "../actions/likesActions";
import { Reducer } from "redux";

const initialState = {
    likes: [],
    loading: false,
    error: "",
};

interface State {
    likes: Like[];
    loading: boolean;
    error: string;
}

const likesReducer: Reducer<State, LikesActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case LikesActionType.LIKE_POST_REQUEST:
            return {
                likes: state.likes,
                error: "",
                loading: true,
            };
        case LikesActionType.LIKE_POST_SUCCESS:
            return {
                likes: [...state.likes, action.payload],
                error: "",
                loading: false,
            };
        case LikesActionType.LIKE_POST_ERROR:
            return {
                likes: [],
                error: action.payload,
                loading: false,
            };
        case LikesActionType.UNLIKE_POST_REQUEST:
            return {
                likes: state.likes,
                error: "",
                loading: true,
            };
        case LikesActionType.UNLIKE_POST_SUCCESS:
            return {
                likes: state.likes.filter((current) => {
                    return !(
                        current.postId === action.payload.postId &&
                        current.userId === action.payload.userId
                    );
                }),
                error: "",
                loading: false,
            };
        case LikesActionType.UNLIKE_POST_ERROR:
            return {
                likes: [],
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default likesReducer;
