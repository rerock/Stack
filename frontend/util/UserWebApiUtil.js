var UserServerActions = require('../actions/user/UserServerActions');

var UserWebApiUtil = {
  getAll: function (team_id) {
    $.ajax({
      url: "/api/teams/" + team_id + "/users",
      dataType: "json",
      success: function(users){
        UserServerActions.receiveUsers(users);
      }
    });
  },
};

module.exports = UserWebApiUtil;
