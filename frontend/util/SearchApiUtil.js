var SearchActions = require('../actions/message/SearchActions');

var SearchApiUtil = {

  search: function (query, limit, team_id) {
    $.ajax({
      url: '/api/search',
      type: 'GET',
      dataType: 'json',
      data: {query: query, limit: limit, team_id: team_id},
      success: function (data) {
        SearchActions.receiveResults(data);
      }
    });
  }
};

module.exports = SearchApiUtil;
