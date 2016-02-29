var MessageServerActions = require('../actions/message/MessageServerActions');

var MessageWebApiUtil = {
  getAll: function (receivable_id, receivable_type) {
    $.ajax({
      url: "/api/messages",
      data: {
        receivable_id: receivable_id,
        receivable_type: receivable_type
      },
      dataType: "json",
      success: function(messages){
        MessageServerActions.receiveMessages(messages);
      }
    });
  },
  addMessage: function(message, receivable_id, receivable_type){
    $.ajax({
      url: "/api/messages",
      method: "POST",
      data: {
        message: message,
        receivable_id: receivable_id,
        receivable_type: receivable_type
      },
      dataType: "json",
      success: function(message){
        MessageServerActions.receiveSingleMessage(message);
      }
    });
  }
};

module.exports = MessageWebApiUtil;
