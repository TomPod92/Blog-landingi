import { UserActionType } from "../action-types/userActionTypes";
import { UserActions } from "../actions/userActions";

const initialState = {
    user: {
        id: "",
        mail: "",
        name: "",
    },
    loading: true,
    error: "",
};

interface State {
    user: {
        id: string;
        mail: string;
        name: string;
    };
    loading: boolean;
    error: string;
}

const userReducer = (state: State = initialState, action: UserActions) => {
    switch (action.type) {
        case UserActionType.LOGIN_USER_REQUEST:
            return {
                loading: true,
                error: "",
            };
        case UserActionType.LOGIN_USER_SUCCESS:
            return {
                user: {
                    id: "abcd1234",
                    mail: "john.doe@gmail.com",
                    name: "John",
                },
                loading: false,
                error: "",
            };
        case UserActionType.LOGIN_USER_ERROR:
            return {
                user: {},
                loading: false,
                error: action.payload,
            };
        case UserActionType.LOGOUT_USER_REQUEST:
            return {
                loading: true,
                error: "",
            };
        case UserActionType.LOGOUT_USER_SUCCESS:
            return {
                user: {},
                loading: false,
                error: "",
            };
        case UserActionType.LOGOUT_USER_ERROR:
            return {
                user: {},
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
