import { SinglePostActionType } from "../action-types/singlePostActionTypes";
import { Post } from "../../types";
import { SinglePostActions } from "../actions/singlePostActions";
import { Reducer } from "redux";

const initialState = {
    post: undefined,
    loading: true,
    error: "",
};

interface State {
    post: Post | undefined;
    loading: boolean;
    error: string;
}

const singlePostReducer: Reducer<State, SinglePostActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SinglePostActionType.GET_SINGLE_POST_REQUEST:
            return {
                post: undefined,
                error: "",
                loading: true,
            };
        case SinglePostActionType.GET_SINGLE_POST_SUCCESS:
            return {
                post: action.payload,
                error: "",
                loading: false,
            };
        case SinglePostActionType.GET_SINGLE_POST_ERROR:
            return {
                post: undefined,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default singlePostReducer;
