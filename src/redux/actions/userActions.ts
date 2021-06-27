import { UserActionType } from "../action-types/userActionTypes";

interface LoginRequestAction {
    type: UserActionType.LOGIN_USER_REQUEST;
}

interface LoginSuccessAction {
    type: UserActionType.LOGIN_USER_SUCCESS;
}

interface LoginErrorAction {
    type: UserActionType.LOGIN_USER_ERROR;
    payload: string;
}

interface LogoutRequestAction {
    type: UserActionType.LOGOUT_USER_REQUEST;
}

interface LogoutSuccessAction {
    type: UserActionType.LOGOUT_USER_SUCCESS;
}

interface LogoutErrorAction {
    type: UserActionType.LOGOUT_USER_ERROR;
    payload: string;
}

export type UserActions =
    | LoginRequestAction
    | LoginSuccessAction
    | LoginErrorAction
    | LogoutRequestAction
    | LogoutSuccessAction
    | LogoutErrorAction;
