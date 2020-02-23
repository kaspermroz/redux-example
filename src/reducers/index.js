import posts from './postsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ posts });

export default rootReducer;