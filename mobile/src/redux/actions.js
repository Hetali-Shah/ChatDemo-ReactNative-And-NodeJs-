/**
 * @providesModule ReduxActions
 */
//ACTION TYPE
export const USER_SET = 'user/SET';
export const SOCKET_STATUS_SET = 'socketStatus/SET';
export const RESET_REDUX = 'redux/RESET';


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

