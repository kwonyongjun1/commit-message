// src/redux/index.js
import { createStore, combineReducers } from 'redux';
import Message from './Message';

const rootReducer = combineReducers({
    Message : Message,
});

const store = createStore(rootReducer);

export default store;
