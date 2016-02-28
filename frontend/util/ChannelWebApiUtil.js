var ChannelServerActions = require('../actions/channel/ChannelServerActions');

var ChannelWebApiUtil = {
  getAll: function (team_id) {
    $.ajax({
      url: "/api/teams/" + team_id + "/channels",
      dataType: "json",
      success: function(channels){
        ChannelServerActions.receiveChannels(channels);
      }
    });
  },
  addChannel: function(channel, team_id){
    $.post("/api/teams/" + team_id + "/channels", {channel: channel}, function(channel){
      ChannelServerActions.receiveSingleChannel(channel);
    });
  }
};

module.exports = ChannelWebApiUtil;
