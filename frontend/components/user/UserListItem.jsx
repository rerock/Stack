var React = require('react');

var UsersListItem = React.createClass({

  onClick: function(e) {
    e.preventDefault();
    var setActive = this.props.setActive;
    var user = this.props.user;
    this.props.setActive("User",user);
  },

  render: function () {
    var user = this.props.user;
    return (
      <li>
        <a onClick={this.onClick}>{user.handle}</a>
      </li>
    );
  }
});

module.exports = UsersListItem;
