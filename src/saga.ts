
import axios from "axios";
import { Dispatch } from "redux";
 import { BlogsActionType } from "./actionTypes";
 import { BlogResponse } from "./types";
import { FetchBlogAction,FetchBlogsLoadingAction, FetchBlogsSuccessAction } from "./actions";
import { fetchBlogsLoading, fetchBlogsSuccess, fetchBlogsFailure } from './actions-creator';
import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchBlogService} from './service'

const API = "https://jsonplaceholder.typicode.com/posts";


//saga async handler
function* fetchBlog(action: FetchBlogsLoadingAction) {
  console.log("saga called");
  try {
    const {data}: {data:BlogResponse[]} = yield call(fetchBlogService,API);
    console.log(data);
     yield put(fetchBlogsSuccess(data));
  } catch (e) {
     yield put(fetchBlogsFailure(e.message));
  }
}


//Watcher
export function* mySaga() {
  yield takeEvery(BlogsActionType.FETCH_BLOGS_LOADING, fetchBlog);
}