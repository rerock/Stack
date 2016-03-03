var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var _messages = [];
var MessageStore = new Store(AppDispatcher);

MessageStore.all = function () {
  return _messages.slice();
};

MessageStore.getByChannel = function (channel) {
  return _messages.filter(function(msg){
    return (msg.receivable_id === channel.id) && (msg.receivable_type==='Channel');
  });
};

MessageStore.getByPM = function (user, current_user_id) {
  return _messages.filter(function(msg){
    return (
      ( (msg.receivable_id === user.id) && (msg.receivable_type==='User') && (msg.sender_id===current_user_id) )
      || ( (msg.receivable_id === current_user_id) && (msg.receivable_type==='User') && (msg.sender_id===user.id) )
    );
  });
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
