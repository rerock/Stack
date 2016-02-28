var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var _channels = [];
var ChannelStore = new Store(AppDispatcher);

ChannelStore.all = function () {
  return _channels.slice();
};

ChannelStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "ADD_CHANNEL":
      addChannel(payload.channel);
      ChannelStore.__emitChange();
      break;
    case "RECEIVE_CHANNELS":
      resetChannels(payload.channels);
      ChannelStore.__emitChange();
      break;
  }
};

function addChannel(channel) {
  _channels.push(channel);
}

function resetChannels(channels) {
  _channels = channels;
}


module.exports = ChannelStore;
