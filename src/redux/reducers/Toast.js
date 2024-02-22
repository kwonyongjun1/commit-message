import { SET_TOAST_MESSAGE } from '../actions/Toast';

const initialState = {
  message: ''
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOAST_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default toastReducer;
