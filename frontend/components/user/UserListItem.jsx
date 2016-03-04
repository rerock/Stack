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
    var handle = user.id === parseInt(this.props.user_id) ? "stackbot" : user.handle
    var activeUser = this.props.active.receivable_id;
    var active = ''
    if ( user.id === activeUser  && this.props.active.receivable_type === 'User'){
      active = 'active';
    }
    return (
      <li className={active}>
        <a onClick={this.onClick}>{handle}</a>
      </li>
    );
  }
});

module.exports = UsersListItem;
