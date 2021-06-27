import { Like } from "../../types";
import { LikesActionType } from "../action-types/likesActionTypes";
import { LikesActions } from "../actions/likesActions";

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

const likesReducer = (state: State = initialState, action: LikesActions) => {
    switch (action.type) {
        case LikesActionType.LIKE_POST_REQUEST:
            return {
                error: "",
                loading: true,
            };
        case LikesActionType.LIKE_POST_SUCCESS:
            return {
                like: [...state.likes, action.payload],
                error: "",
                loading: false,
            };
        case LikesActionType.LIKE_POST_ERROR:
            return {
                like: [],
                error: action.payload,
                loading: false,
            };
        case LikesActionType.UNLIKE_POST_REQUEST:
            return {
                error: "",
                loading: true,
            };
        case LikesActionType.UNLIKE_POST_SUCCESS:
            return {
                like: state.likes.filter(
                    (current) =>
                        current.postId === action.payload.postId &&
                        current.userId === action.payload.userId
                ),
                error: "",
                loading: false,
            };
        case LikesActionType.UNLIKE_POST_ERROR:
            return {
                like: [],
                error: action.payload,
                loading: false,
            };
    }
};

export default likesReducer;
