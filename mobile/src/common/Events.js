module.exports = {
  roomMessageOut: (key) =>  `out-${key}`,
  roomMessageChat: (key) =>  `chat-${key}`,
  roomUpdate: (key) =>  `update-${key}`,
  roomsRefresh: (key) =>  `room-refresh-${key}`,
  notificationsRefresh: (key) =>  `notification-refresh-${key}`,
  sendMessage: 'send-message',
  refreshAndJoinRooms: 'refresh-and-join-rooms',
  refreshUsers: 'refresh-users'
}
