import { takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS } from '../actions/actionTypes';
import fetchPosts from './postSagas';

function* rootSaga() {
  yield takeEvery(FETCH_POSTS, fetchPosts);
}

export default rootSaga;