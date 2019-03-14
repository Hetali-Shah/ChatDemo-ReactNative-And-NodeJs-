/**
 * @providesModule ReduxActions
 */
//ACTION TYPE
export const USER_SET = 'user/SET';
export const SOCKET_STATUS_SET = 'socketStatus/SET';
export const RESET_REDUX = 'redux/RESET';
export const ADD_CHAT_USER_SET = 'addChatUser/SET';


//ACTIONS

export const resetRedux = () => ({
  type: RESET_REDUX
});

export const userSet = user => ({
  type: USER_SET,
  user
});

export const socketStatusSet = data => ({
  type: SOCKET_STATUS_SET,
  data
});

export const addChatUserSet = user => ({
  type: ADD_CHAT_USER_SET,
  user
});

