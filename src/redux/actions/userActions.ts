import { UserActionType } from "../action-types/userActionTypes";

interface LoginAction {
    type: UserActionType.LOGIN;
}

interface LogoutAction {
    type: UserActionType.LOGOUT;
}

export type UserActions = LoginAction | LogoutAction;
