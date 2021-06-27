import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
