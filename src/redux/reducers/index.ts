import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import likesReducer from "./likesReducer";
import postsReducer from "./postsReducer";
import singlePostReducer from "./singlePostReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    singlePost: singlePostReducer,
    comments: commentsReducer,
    likes: likesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
