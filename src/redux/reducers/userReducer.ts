import { UserActionType } from "../action-types/userActionTypes";
import { UserActions } from "../actions/userActions";

const initialState = {
    id: "",
    mail: "",
    name: "",
};

interface State {
    id: string;
    mail: string;
    name: string;
}

const userReducer = (state: State = initialState, action: UserActions) => {
    switch (action.type) {
        case UserActionType.LOGIN:
            return {
                id: "abcd1234",
                mail: "john.doe@gmail.com",
                name: "John",
            };
        case UserActionType.LOGOUT:
            return {
                id: "",
                mail: "",
                name: "",
            };
        default:
            return state;
    }
};

export default userReducer;
