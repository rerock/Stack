var React = require('react');
var SearchApiUtil = require('../../util/SearchApiUtil');
var SearchResultsStore = require('../../stores/SearchResultsStore');
var MessageListItem = require('./MessageListItem');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;

var Search = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({limit: 10, query: ""});
  },

  componentDidMount: function () {
    this.listener = SearchResultsStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.forceUpdate();
  },

  search: function (e) {
    var query = e.target.value;
    SearchApiUtil.search(query, 10);

    this.setState({limit: 10, query: query});
  },

  handleMessageClick: function (e) {
  },

  render: function () {
    var searchResults = SearchResultsStore.all().map(function (searchResult, key) {
      // if (searchResult._type === "Message") {
        return (
          <div className="search-result" id={searchResult.id} key={key} onClick={this.handleMessageClick}>
            <div className="search-result-body">{searchResult.text}</div>
          </div>
        );
      // }
    }.bind(this));
    console.log(searchResults);
    return (
      <div className="search">
        <input
          className="search-input"
          type="text"
          onKeyUp={this.search} />
        <ul className="search-results-list group">
          {searchResults}
        </ul>
      </div>
    );
  }
});

module.exports = Search;
