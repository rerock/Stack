var React = require('react');
var SearchApiUtil = require('../../util/SearchApiUtil');
var SearchResultsStore = require('../../stores/SearchResultsStore');
var MessageListItem = require('./MessageListItem');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var UserStore = require('../../stores/UserStore');
var ChannelStore = require('../../stores/ChannelStore');

var Search = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      query: "",
      results: []
    };
  },

  componentDidMount: function () {
    this.listener = SearchResultsStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    var self = this;
    var searchResults = SearchResultsStore.all().filter(function(res){
      return (res.receivable_type === "Channel") ||
              ((res.receivable_type === "User") &&
                ((res.sender_id === parseInt(self.props.user_id)) ||
                (res.receivable_id === parseInt(self.props.user_id))))
    });
    this.setState({results: searchResults});
  },

  search: function (e) {
    var query = e.target.value;
    SearchApiUtil.search(query, 100);
    this.setState({query: query});
  },

  handleMessageClick: function (e) {
  },

  render: function () {
    var searchResults = this.state.results.map(function (searchResult, key) {
        var chat;
        if (searchResult.receivable_type === "Channel") {
          chat = "# Channel: " +ChannelStore.getByChannelID(searchResult.receivable_id)[0].title;
        } else {
          chat = "@ User: " +UserStore.getByUserID(searchResult.receivable_id)[0].handle;
        }
        return (
          <div className="search-result" id={searchResult.id} key={key} onClick={this.handleMessageClick}>
            <ul className="search-result-body">
              <li>
                <h3>{searchResult.text}</h3>
                <h5>{chat}</h5>
                <h5>{"Sender: " + UserStore.getByUserID(searchResult.sender_id)[0].handle}</h5>
                <h5>{"Date: " +new Date(searchResult.created_at).toLocaleTimeString()}</h5>
              </li>
            </ul>

          </div>
        );
    }.bind(this));

    return (
      <div className="form-group">
        <input
          className="search-input"
          type="text"
          placeholder="Search Messages"
          onKeyUp={this.search} />
        <ul className="search-results-list group">
          {searchResults}
        </ul>
      </div>
    );
  }
});

module.exports = Search;
