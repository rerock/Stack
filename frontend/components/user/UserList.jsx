var React = require('react');
var UsersListItem = require('./UserListItem');

var UsersList = React.createClass({

  shouldComponentUpdate: function(){
    return true;
  },

  render: function () {
    var self=this;
    return (
      <ul>
        {
          this.props.users.map(function(user){
            return <UsersListItem
              key={user.id}
              user={user}
              setActive={self.props.setActive}
              {...self.props}
            />
          })
        }
      </ul>
    );
  }
});

module.exports = UsersList;
