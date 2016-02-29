var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var _messages = [];
var MessageStore = new Store(AppDispatcher);

MessageStore.all = function () {
  return _messages.slice();
};

MessageStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "ADD_MESSAGE":
      addMessage(payload.message);
      MessageStore.__emitChange();
      break;
    case "RECEIVE_MESSAGES":
      resetMessages(payload.messages);
      MessageStore.__emitChange();
      break;
  }
};

function addMessage(message) {
  _messages.push(message);
}

function resetMessages(messages) {
  _messages = messages;
}


module.exports = MessageStore;
