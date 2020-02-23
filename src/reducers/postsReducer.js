import {
  FETCH_POSTS,
  FETCH_POSTS_REJECTED,
  FETCH_POSTS_FULFILLED,
  CLEAR_POSTS_ERRORS,
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  fetching: false,
  fetched: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        fetching: true,
        fetched: false,
      };
    case FETCH_POSTS_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case FETCH_POSTS_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.payload,
      };
    case CLEAR_POSTS_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default postsReducer;