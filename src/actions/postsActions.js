import {
  FETCH_POSTS,
  FETCH_POSTS_REJECTED,
  FETCH_POSTS_FULFILLED,
  CLEAR_POSTS_ERRORS,
} from './actionTypes';
import API from '../api';

export const _getPosts = () => async dispatch => {
  dispatch({ type: CLEAR_POSTS_ERRORS });
  dispatch({ type: FETCH_POSTS });
  try {
    const { data, error } = await API.getPosts();
    if (error) {
      dispatch({ type: FETCH_POSTS_REJECTED, payload: error });
    } else {
      dispatch({ type: FETCH_POSTS_FULFILLED, payload: data });
    }
  } catch (error) {
    dispatch({ type: FETCH_POSTS_REJECTED, payload: error });
  }
};