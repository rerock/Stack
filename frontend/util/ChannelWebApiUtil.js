var ChannelServerActions = require('../actions/channel/ChannelServerActions');

var ChannelWebApiUtil = {
  getAll: function () {
    $.ajax({
      url: "/api/channels",
      dataType: "json",
      success: function(channels){
        ChannelServerActions.receiveChannels(channels);
      }
    });
  },
  addChannel: function(channel){
    $.post("/api/channels", {channel: channel}, function(channel){
      ChannelServerActions.receiveSingleChannel(channel);
    });
  }
};

module.exports = ChannelWebApiUtil;
