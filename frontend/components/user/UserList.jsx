var React = require('react');
var UsersListItem = require('./UserListItem');

var UsersList = React.createClass({

  shouldComponentUpdate: function(){
    return true;
  },

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
                setActive={self.props.setActive}
              />
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = UsersList;
