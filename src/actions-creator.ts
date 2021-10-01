import { FetchBlogsLoadingAction, FetchBogsFailureAction, FetchBlogsSuccessAction,CreateBlogAction } from './actions';
import { BlogsActionType } from './actionTypes';
import { BlogResponse } from './types';

// const actionCreator = (type: string) => (payload: any) => ({ type, payload });

// export const fetchBlogsLoading = actionCreator(BlogsActionType.FETCH_BLOGS_FAILURE);
// export const fetchBlogsSuccess = actionCreator(BlogsActionType.FETCH_BLOGS_SUCCESS);
// export const FETCH_BLOGS_FAILURE = actionCreator(BlogsActionType.FETCH_BLOGS_FAILURE);


export const fetchBlogsLoading = (): FetchBlogsLoadingAction => ({ type: BlogsActionType.FETCH_BLOGS_LOADING })
export const fetchBlogsSuccess = (payload: BlogResponse[]): FetchBlogsSuccessAction => ({ type: BlogsActionType.FETCH_BLOGS_SUCCESS, payload })
export const fetchBlogsFailure = (payload: string): FetchBogsFailureAction => ({ type: BlogsActionType.FETCH_BLOGS_FAILURE, payload })
export const createBlog = (payload:BlogResponse): CreateBlogAction => ({ type: BlogsActionType.CREATE_BLOG,payload })
