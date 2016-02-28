var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var TeamConstants = require('../constants/TeamConstants');

var _teams = [];
var _team = {};

var TeamStore = new Store (AppDispatcher);

var resetTeams = function (teams) {
  teams = teams.teams;
  _teams = [];
  Object.keys(teams).forEach(function (key) {
    _teams.push(teams[key]);
  });

};

var resetTeam = function (team) {
  if (TeamStore.findTeam(team.id) === {}) {
    _teams.push(team);
  }
  _team = team;
};

TeamStore.findTeam = function (id) {
  var team = {};

  for (var i = 0; i < _teams.length; i++) {
    if (_teams[i].id === id) {
      team = _teams[i];
    }
  }

  return team;
};


TeamStore.single = function () {
  return _team;
};

TeamStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TeamConstants.TEAMS_RECEIVED:
      resetTeams(payload.teams);
      TeamStore.__emitChange();
      break;
    case TeamConstants.TEAM_RECEIVED:
      resetTeam(payload.team);
      TeamStore.__emitChange();
      break;
  }
};

module.exports = TeamStore;
