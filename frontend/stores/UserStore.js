var AppDispatcher = require('../dispatcher/Dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/UserConstants');

var UserStore = new Store (AppDispatcher);

var _users = [];

var resetUsers = function (users) {
  _users = users.users;
};

UserStore.all = function () {
  return _users.slice(0);
};

UserStore.getByTeamID = function (teamId) {
  return _users.filter(function(user){
    return (user.team_id === teamId) ;
  });
};


UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
