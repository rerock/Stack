var AppDispatcher = require('../../dispatcher/Dispatcher');
var MessageWebApiUtil = require('../../util/MessageWebApiUtil');

var MessageActions = {
  createMessage: function (message, receivable_id, receivable_type) {
    MessageWebApiUtil.addMessage(message, receivable_id , receivable_type);

  },

  fetchMessages: function (receivable_id , receivable_type) {
    MessageWebApiUtil.getAll(receivable_id , receivable_type);
  },

  forward_message: function(msg){
    MessageWebApiUtil.forward_message(msg);
  }
};

module.exports = MessageActions;
