import {
    SET_AUTO_MODE,
    SET_EMOJI,
    SET_TYPE,
    SET_CURRERNT_STATE,
    SET_SHORT_SUMMARY,
    SET_SCOPE,
    SET_BODY,
    SET_FOOTER
  } from '../actions/Message';
  import { STATE } from '../../constants';

  const messageState = {
    autoMode: false,
    emoji: "✨",
    type: "",
    currentState: STATE.EMOJI_MODE,
    shortSummary: "",
    scope: "",
    body: "",
    footer: ""
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
      case SET_SHORT_SUMMARY:
        return { ...state, shortSummary: action.payload };
      case SET_SCOPE:
        return { ...state, scope: action.payload };
      case SET_BODY:
        return { ...state, body: action.payload };
      case SET_FOOTER:
        return { ...state, footer: action.payload };
      default:
        return state;
    }
  };
  
  export default messageReducer;
  