import { takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS_SAGA } from './posts/actionTypes';
import fetchPosts from './posts/sagas';

function* rootSaga() {
  yield takeEvery(FETCH_POSTS_SAGA, fetchPosts);
}

export default rootSaga;