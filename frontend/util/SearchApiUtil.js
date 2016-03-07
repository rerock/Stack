var SearchActions = require('../actions/message/SearchActions');

var SearchApiUtil = {

  search: function (query, limit) {
    $.ajax({
      url: '/api/search',
      type: 'GET',
      dataType: 'json',
      data: {query: query, limit: limit},
      success: function (data) {
        SearchActions.receiveResults(data);
      }
    });
  }
};

module.exports = SearchApiUtil;
