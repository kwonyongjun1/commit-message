import { createStore } from 'redux';
import rootReducer from './reducers/Message';

const store = createStore(rootReducer);

export default store;