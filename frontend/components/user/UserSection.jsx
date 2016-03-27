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
      <div className='support'>
        <div className='panel-heading'>
          <strong>DIRECT MESSAGES</strong>
        </div>
        <div className='panel-body users'>
          <UsersList
            users={this.state.users}
            setActive={this.props.setActive}
            {...this.props}
          />
        </div>
      </div>
    );
  }
});

module.exports = UserSection;
