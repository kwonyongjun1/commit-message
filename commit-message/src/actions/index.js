// actions.js
export const SET_AUTO_MODE = 'SET_AUTO_MODE';
export const SET_EMOJI = 'SET_EMOJI';
export const SET_TYPE = 'SET_TYPE';

// action creators
export const setAutoMode = (autoMode) => ({ type: SET_AUTO_MODE, payload: autoMode });
export const setEmoji = (emoji) => ({ type: SET_EMOJI, payload: emoji });
export const setType = (type) => ({ type: SET_TYPE, payload: type });

