var React = require('react');
var UsersList = require('./UserList');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/user/UserActions');

var UserSection = React.createClass({
  getInitialState: function () {
    return({
        users: UserStore.getByTeamID(this.props.team_id),
      });
  },

  _usersChanged: function () {
    this.setState({users: UserStore.getByTeamID(this.props.team_id)});
  },

  componentDidMount: function(){
    UserStore.addListener(this._usersChanged);
    UserActions.fetchUsers(this.props.team_id);
  },

  render: function () {
    return (
      <div>
          <UsersList
            users={this.state.users}
            setActive={this.props.setActive}
          />
      </div>
    );
  }
});

module.exports = UserSection;
