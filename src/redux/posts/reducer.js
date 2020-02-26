import {
  FETCH_POSTS,
  FETCH_POSTS_REJECTED,
  FETCH_POSTS_FULFILLED,
  CLEAR_POSTS_ERRORS,
  FETCH_POSTS_SAGA,
} from './actionTypes';

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case FETCH_POSTS_SAGA:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case FETCH_POSTS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_POSTS_FULFILLED:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
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

export default reducer;