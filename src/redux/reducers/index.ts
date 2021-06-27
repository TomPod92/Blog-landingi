import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import likesReducer from "./likesReducer";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
    likes: likesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
