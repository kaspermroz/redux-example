import { call, put } from 'redux-saga/effects';
import {
  FETCH_POSTS_FULFILLED,
  FETCH_POSTS_REJECTED,
  CLEAR_POSTS_ERRORS
} from './actionTypes';
import API from '../../api';

function* fetchPosts() {
  yield put({ type: CLEAR_POSTS_ERRORS });
  try {
    const { data, error } = yield call(API.getPosts);
    if (error) {
      yield put({ type: FETCH_POSTS_REJECTED, payload: error });
    } else {
      yield put({ type: FETCH_POSTS_FULFILLED, payload: data });
    }
  } catch (error) {
    yield put({ type: FETCH_POSTS_REJECTED, payload: error });
  }
}

export default fetchPosts;