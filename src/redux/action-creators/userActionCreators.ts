import { Dispatch } from "redux";
import { UserActionType } from "../action-types/userActionTypes";
import { UserActions } from "../actions/userActions";

export const login = () => async (dispatch: Dispatch<UserActions>) => {
    dispatch({ type: UserActionType.LOGIN_USER_REQUEST });
    dispatch({ type: UserActionType.LOGIN_USER_SUCCESS });
};

export const logout = () => async (dispatch: Dispatch<UserActions>) => {
    dispatch({ type: UserActionType.LOGOUT_USER_REQUEST });
    dispatch({ type: UserActionType.LOGOUT_USER_SUCCESS });
};
