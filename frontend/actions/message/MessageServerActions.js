var AppDispatcher = require('../../dispatcher/Dispatcher');

var MessageServerActions = {
  receiveMessages: function (messages) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_MESSAGES",
      messages: messages
    });
  },
  receiveSingleMessage: function (message) {
    AppDispatcher.dispatch({
      actionType: "ADD_MESSAGE",
      message: message
    });
  }
};

module.exports = MessageServerActions;
