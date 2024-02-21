// src/redux/index.js
import { combineReducers } from 'redux';
import messageReducer from './Message';

const rootReducer = combineReducers({
  Message: messageReducer,
});

export default rootReducer;
