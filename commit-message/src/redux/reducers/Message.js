import {
    SET_AUTO_MODE,
    SET_EMOJI,
    SET_TYPE,
  } from '../actions/Message';
  
  const messageState = {
    autoMode: true,
    emoji: 'sparkles',
    type: '',
  };
  
  const messageReducer = (state = messageState, action) => {
    switch (action.type) {
      case SET_AUTO_MODE:
        return { ...state, autoMode: action.payload };
      case SET_EMOJI:
        return { ...state, emoji: action.payload };
      case SET_TYPE:
        return { ...state, type: action.payload };
      default:
        return state;
    }
  };
  
  
  export default messageReducer;
  