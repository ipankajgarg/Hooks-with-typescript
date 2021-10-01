import { BlogsActionType } from './actionTypes';
import {BlogResponse} from './types';

export interface FetchBlogsLoadingAction{
    type: BlogsActionType.FETCH_BLOGS_LOADING;
}

export interface FetchBlogsSuccessAction{
    type: BlogsActionType.FETCH_BLOGS_SUCCESS;
    payload:BlogResponse[]
}
export interface FetchBogsFailureAction{
    type: BlogsActionType.FETCH_BLOGS_FAILURE;
    payload: string;
}
export interface CreateBlogAction{
    type: BlogsActionType.CREATE_BLOG;
    payload: BlogResponse;
}

export type FetchBlogAction = FetchBlogsLoadingAction | FetchBlogsSuccessAction | FetchBogsFailureAction|CreateBlogAction;