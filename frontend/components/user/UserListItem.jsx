var React = require('react');

var UsersListItem = React.createClass({

  onClick: function(e) {
    e.preventDefault();
    var setUser = this.props.setUser;
    var user = this.props.user;
    this.props.setUser(user);
  },

  render: function () {
    var user = this.props.user;
    var activeUser = this.props.activeUser;
    var active = user === activeUser ? "active" : "";
    return (
      <li className={active}>
        <a onClick={this.onClick}>{user.handle}</a>
      </li>
    );
  }
});

module.exports = UsersListItem;
