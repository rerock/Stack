var AppDispatcher = require('../../dispatcher/Dispatcher');

var ChannelServerActions = {
  receiveChannels: function (channels) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_CHANNELS",
      channels: channels
    });
  },
  receiveSingleChannel: function (channel) {
    AppDispatcher.dispatch({
      actionType: "ADD_CHANNEL",
      channel: channel
    });
  }
};

module.exports = ChannelServerActions;
