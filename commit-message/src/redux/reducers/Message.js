import {
    SET_AUTO_MODE,
    SET_EMOJI,
    SET_TYPE,
    SET_CURRERNT_STATE
  } from '../actions/Message';
  import { STATE } from '../../constants';

  const messageState = {
    autoMode: true,
    emoji: "sparkles",
    type: " ",
    currentState : STATE.DEFAULT_MODE
  };
  
  const messageReducer = (state = messageState, action) => {
    switch (action.type) {
      case SET_AUTO_MODE:
        return { ...state, autoMode: action.payload };
      case SET_EMOJI:
        return { ...state, emoji: action.payload };
      case SET_TYPE:
        return { ...state, type: action.payload };
      case SET_CURRERNT_STATE:
        return { ...state, currentState: action.payload };
      default:
        return state;
    }
  };
  
  
  export default messageReducer;
  