var AppDispatcher = require('../../dispatcher/Dispatcher');
var UserWebApiUtil = require('../../util/UserWebApiUtil');

var UserActions = {
  fetchUsers: function (team_id) {
    UserWebApiUtil.getAll(team_id);
  }
};

module.exports = UserActions;
