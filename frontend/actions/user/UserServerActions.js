var AppDispatcher = require('../../dispatcher/Dispatcher');

var UserServerActions = {
  receiveUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_USERS",
      users: users
    });
  },
};

module.exports = UserServerActions;
