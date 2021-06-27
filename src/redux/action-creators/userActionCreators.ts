import { Dispatch } from "redux";
import { UserActionType } from "../action-types/userActionTypes";
import { UserActions } from "../actions/userActions";

export const login = () => async (dispatch: Dispatch<UserActions>) => {
    dispatch({ type: UserActionType.LOGIN });
};

export const logout = () => async (dispatch: Dispatch<UserActions>) => {
    dispatch({ type: UserActionType.LOGOUT });
};
