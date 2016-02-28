var AppDispatcher = require('../../dispatcher/Dispatcher');
var ChannelWebApiUtil = require('../../util/ChannelWebApiUtil');

var ChannelActions = {
  createChannel: function (channel) {
    ChannelWebApiUtil.addChannel(channel);

  },
  fetchChannels: function () {
    ChannelWebApiUtil.getAll();
  }
};

module.exports = ChannelActions;
