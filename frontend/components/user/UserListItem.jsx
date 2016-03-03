var React = require('react');

var UsersListItem = React.createClass({

  onClick: function(e) {
    e.preventDefault();
    var setActive = this.props.setActive;
    var userId = this.props.user.id;
    this.props.setActive("User",userId);
  },

  render: function () {
    var user = this.props.user;
    var activeUser = this.props.active.receivable_id;
    var active = user.id === activeUser ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick}>{user.handle}</a>
      </li>
    );
  }
});

module.exports = UsersListItem;
