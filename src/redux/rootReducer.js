import posts from './posts/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ posts });

export default rootReducer;