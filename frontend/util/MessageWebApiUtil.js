var MessageServerActions = require('../actions/message/MessageServerActions');

var MessageWebApiUtil = {
  getAll: function (team_id) {
    $.ajax({
      url: "/api/teams/" + team_id + "/channels",
      dataType: "json",
      success: function(messages){
        MessageServerActions.receiveMessages(messages);
      }
    });
  },
  addMessage: function(message, team_id){
    $.post("/api/teams/" + team_id + "/channels", {message: message}, function(message){
      MessageServerActions.receiveSingleMessage(message);
    });
  }
};

module.exports = MessageWebApiUtil;
