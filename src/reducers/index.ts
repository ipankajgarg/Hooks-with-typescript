import { combineReducers } from "redux";
import { blogReducer } from "./blogReducer";

export const reducers = combineReducers({
  blogs: blogReducer
});

export type RootState = ReturnType<typeof reducers>