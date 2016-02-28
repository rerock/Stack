var AppDispatcher = require('../../dispatcher/Dispatcher');
var ChannelWebApiUtil = require('../../util/ChannelWebApiUtil');

var ChannelActions = {
  createChannel: function (channel) {
    ChannelWebApiUtil.addChannel(channel);

  },
  fetchChannels: function (team_id) {
    ChannelWebApiUtil.getAll(team_id);
  }
};

module.exports = ChannelActions;
