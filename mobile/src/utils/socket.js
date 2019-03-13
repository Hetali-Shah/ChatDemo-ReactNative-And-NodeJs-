import io from 'socket.io-client';
import { getAuthToken } from '../common/global'
import {store} from '../redux/store';
import { socketStatusSet } from '../redux/actions';
import _ from 'lodash';

export const SOCKET_HOST = 'http://192.168.1.39:3000';

let socket = null;

const SocketUtils = {
  init: async(token = false) =>  {
    socket = await io(SOCKET_HOST, {
      query: {
        token: (token) ? token : await getAuthToken()
      }
    });
    socket.on('connect', function() {
      store.dispatch(socketStatusSet(true))
    });
  },

  joinRoom: async (roomId, callback) => {
    !_.isEmpty(socket) && socket.removeListener(roomId);
    !_.isEmpty(socket) && socket.on(roomId, callback);
  },

  leaveRoom: async (roomId) => {
    !_.isEmpty(socket) && socket.removeListener(roomId)
  },

  sendMessage: async function (message) {
    !_.isEmpty(socket) && socket.emit('send-message', message)
  },

  refreshServerRooms: function () {
    !_.isEmpty(socket) && socket.emit('refresh-and-join-rooms', {});
  },

  refreshUser: function () {
    !_.isEmpty(socket) && socket.emit('refresh-users', {});
  },

  disconnect: function () {
    !_.isEmpty(socket) && socket.disconnect();
  },

}

module.exports = SocketUtils;
