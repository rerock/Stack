var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var ChannelStore = new Store(AppDispatcher);
var _channels = [];

ChannelStore.all = function () {
  return _channels.slice(0);
};

ChannelStore.getByChannelID= function(channel_id){
  return _channels.filter(function(chan){
    return (chan.id === channel_id) ;
  });
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
