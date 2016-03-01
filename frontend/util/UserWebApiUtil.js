var UserServerActions = require('../actions/user/UserServerActions');

var UserWebApiUtil = {
  getAll: function (team_id) {
    $.ajax({
      url: "/users",
      dataType: "json",
      success: function(users){
        UserServerActions.receiveUsers(users);
      }
    });
  },
};

module.exports = UserWebApiUtil;
