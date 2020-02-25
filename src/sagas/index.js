import { takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS_SAGA } from '../actions/actionTypes';
import fetchPosts from './postSagas';

function* rootSaga() {
  yield takeEvery(FETCH_POSTS_SAGA, fetchPosts);
}

export default rootSaga;