import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import customizeVideoReducer from './customVideoReducer';

export default combineReducers({ cartReducer, customizeVideoReducer });
