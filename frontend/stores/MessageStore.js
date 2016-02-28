var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var MessageConstants = require('../constants/MessageConstants');

var _message = {};
var MessageStore = new Store (AppDispatcher);

var resetMessage = function (message) {
  _message = message;
};

MessageStore.message = function () {
  return _message;
};

MessageStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case MessageConstants.MESSAGE_RECEIVED:
      resetMessage(payload.message);
      MessageStore.__emitChange();
      break;
  }
};

module.exports = MessageStore;
