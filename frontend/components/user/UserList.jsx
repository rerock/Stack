var React = require('react');
var UsersListItem = require('./UserListItem');

var UsersList = React.createClass({
  render: function () {
    var self=this;
    return (
      <div>
        <h3>{"Users"}</h3>
        <ul>
          {
            this.props.users.map(function(user){
              return <UsersListItem
                key={user.id}
                user={user}
                setUser={self.props.setUser}
              />
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = UsersList;
