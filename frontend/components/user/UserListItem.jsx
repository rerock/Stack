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
    var active = this.props.active
    var activeUser = this.props.active[Object.keys(this.props.active)[0]];
    var active = user === activeUser ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick}>{user.handle}</a>
      </li>
    );
  }
});

module.exports = UsersListItem;
