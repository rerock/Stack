var AppDispatcher = require('../../dispatcher/Dispatcher');
var MessageWebApiUtil = require('../../util/MessageWebApiUtil');

var MessageActions = {
  createMessage: function (message) {
    MessageWebApiUtil.addMessage(message);

  },
  fetchMessages: function (receivable_id , receivable_type) {
    MessageWebApiUtil.getAll(receivable_id , receivable_type);
  }
};

module.exports = MessageActions;
