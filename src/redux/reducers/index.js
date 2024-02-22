// src/redux/index.js
import { combineReducers } from 'redux';
import messageReducer from './Message';
import toastReducer from './Toast';

const rootReducer = combineReducers({
  Message: messageReducer,
  Toast: toastReducer
});

export default rootReducer;
