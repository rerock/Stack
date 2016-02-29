var AppDispatcher = require('../../dispatcher/Dispatcher');
var MessageWebApiUtil = require('../../util/MessageWebApiUtil');

var MessageActions = {
  createMessage: function (message) {
    MessageWebApiUtil.addMessage(message);

  },
  fetchMessages: function () {
    MessageWebApiUtil.getAll();
  }
};

module.exports = MessageActions;
