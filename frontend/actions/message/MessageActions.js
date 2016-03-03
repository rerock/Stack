var AppDispatcher = require('../../dispatcher/Dispatcher');
var MessageWebApiUtil = require('../../util/MessageWebApiUtil');

var MessageActions = {
  createMessage: function (message, receivable_id, receivable_type) {
    MessageWebApiUtil.addMessage(message, receivable_id , receivable_type);

  },

  fetchMessages: function (receivable_id , receivable_type, current_user_id) {
    MessageWebApiUtil.getAll(receivable_id , receivable_type, current_user_id);
  }
};

module.exports = MessageActions;
