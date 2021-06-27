import { UserActionType } from "../action-types/userActionTypes";
import { UserActions } from "../actions/userActions";
import { Reducer } from "redux";

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

const userReducer: Reducer<State, UserActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case UserActionType.LOGIN_USER_REQUEST:
            return {
                user: state.user,
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
                user: { id: "", mail: "", name: "" },
                loading: false,
                error: action.payload,
            };
        case UserActionType.LOGOUT_USER_REQUEST:
            return {
                user: state.user,
                loading: true,
                error: "",
            };
        case UserActionType.LOGOUT_USER_SUCCESS:
            return {
                user: { id: "", mail: "", name: "" },
                loading: false,
                error: "",
            };
        case UserActionType.LOGOUT_USER_ERROR:
            return {
                user: { id: "", mail: "", name: "" },
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
