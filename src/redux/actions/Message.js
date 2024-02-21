export const SET_AUTO_MODE = 'SET_AUTO_MODE';
export const SET_EMOJI = 'SET_EMOJI';
export const SET_TYPE = 'SET_TYPE';
export const SET_CURRERNT_STATE = 'SET_CURRERNT_STATE';
export const SET_SHORT_SUMMARY = 'SET_SHORT_SUMMARY';
export const SET_SCOPE = 'SET_SCOPE';
export const SET_BODY = 'SET_BODY';
export const SET_FOOTER = 'SET_FOOTER';

export const setAutoMode = (autoMode) => ({ type: SET_AUTO_MODE, payload: autoMode });
export const setEmoji = (emoji) => ({ type: SET_EMOJI, payload: emoji });
export const setType = (type) => ({ type: SET_TYPE, payload: type });
export const setCurrentState = (currentState) => ({
  type: SET_CURRERNT_STATE,
  payload: currentState
});
export const setShortSummary = (shortSummary) => ({
  type: SET_SHORT_SUMMARY,
  payload: shortSummary
});
export const setScope = (scope) => ({ type: SET_SCOPE, payload: scope });
export const setBody = (body) => ({ type: SET_BODY, payload: body });
export const setFooter = (footer) => ({ type: SET_FOOTER, payload: footer });
