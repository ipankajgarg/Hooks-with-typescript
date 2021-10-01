import { BlogsActionType } from "../actionTypes";
import { BlogResponse } from "../types";
import { FetchBlogAction } from "../actions";

export interface BlogReducerState {
  isLoading: boolean;
  data: BlogResponse[];
}

export function blogReducer(
  state: BlogReducerState = { isLoading: false, data: [] },
  action: FetchBlogAction
) {
  switch (action.type) {
    case BlogsActionType.FETCH_BLOGS_LOADING:
      console.log("reducer calleed")
      return {...state, isLoading: true,}
    case BlogsActionType.FETCH_BLOGS_SUCCESS:
      return { ...state, data: [...state.data,...action.payload] };
    case BlogsActionType.CREATE_BLOG:
      state.data.unshift(action.payload);
      return { ...state };

    default:
      return state;
  }
}
