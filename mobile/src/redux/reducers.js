import {
  USER_SET,
  SOCKET_STATUS_SET,
  RESET_REDUX,
  ADD_CHAT_USER_SET
} from './actions'

export const user = (state = null, action) => {
  switch (action.type) {
    case USER_SET:
      return action.user;

    default:
      return state;
  }
}

export const socketStatus = (state = false, action) => {
  switch (action.type) {
    case SOCKET_STATUS_SET:
      return action.data;
    case RESET_REDUX:
      return false;

    default:
      return state;
  }
};

export const addChatUser = (state = null, action) => {
  switch (action.type) {
    case ADD_CHAT_USER_SET:
      return action.user;

    default:
      return state;
  }
};

