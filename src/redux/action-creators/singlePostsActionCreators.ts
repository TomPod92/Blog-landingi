import { Dispatch } from "redux";
import { SinglePostActionType } from "../action-types/singlePostActionTypes";
import { SinglePostActions } from "../actions/singlePostActions";

export const getSinglePost =
    (postId: number) => async (dispatch: Dispatch<SinglePostActions>) => {
        dispatch({ type: SinglePostActionType.GET_SINGLE_POST_REQUEST });
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${postId}`
            );
            const data = await res.json();

            dispatch({
                type: SinglePostActionType.GET_SINGLE_POST_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SinglePostActionType.GET_SINGLE_POST_ERROR,
                payload: "error fetching single post",
            });
        }
    };
