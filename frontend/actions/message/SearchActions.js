var SearchConstants = require('../../constants/SearchConstants');
var AppDispatcher = require('../../dispatcher/Dispatcher');

var SearchActions = {
  receiveResults: function (data) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.RECEIVE_SEARCH_RESULTS,
      searchResults: data.results,
      meta: {totalCount: data.total_count}
    });
  },
};

module.exports = SearchActions;
