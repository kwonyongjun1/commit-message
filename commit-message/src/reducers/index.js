// reducers.js
import {
    SET_AUTO_MODE,
    SET_EMOJI,
    SET_TYPE,
  } from '../actions';
  
  const initialState = {
    autoMode: true,
    emoji: 'sparkles',
    type: undefined,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_AUTO_MODE:
        return { ...state, autoMode: !state.autoMode };
      case SET_EMOJI:
        return { ...state, emoji: action.payload };
      case SET_TYPE:
        return { ...state, type: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  