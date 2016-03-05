var React = require('react');
var ChannelSection = require('./channel/ChannelSection.jsx');
var MessageSection = require('./message/MessageSection.jsx');
var UserSection = require('./user/UserSection.jsx');

var ChannelActions = require('../actions/channel/ChannelActions');
var MessageActions = require('../actions/message/MessageActions');
var UserActions = require('../actions/user/UserActions');

var images = require('../util/image_links');

module.exports = React.createClass({
  getInitialState: function () {
    var initialState = this.props.routes[0].routerProps;
    return initialState;
  },

  componentDidMount: function() {
    ChannelActions.fetchChannels(this.state.team_id);
    MessageActions.fetchMessages(this.state.active.receivable_id, this.state.active.receivable_type, this.state.user_id);
    UserActions.fetchUsers(this.state.team_id);
  },

  setActive: function(receivable_type, receivable_id){
    var active = {};
    active.receivable_type = receivable_type;
    active.receivable_id = receivable_id;
    this.setState({ active: active});
  },

  render: function () {
    var stack = "Stack";
    var current_user = " @ " + this.state.user_name;
    var current_team = this.state.team_name;
    var signout = "/teams/"+this.state.team_id+"/login/";
    var team_index = "/";
    return (
      <div className='app'>
        <div className='sidebar'>
          <img src={images.logo}/>
          <section className="sidebar-user">
            <div className='panel-heading'>
              <a href={team_index}>{current_team}</a>
            </div>
            <div className='panel-username'>
              <a href={signout}>{current_user}</a>
            </div>
          </section>
          <ChannelSection
            setActive={this.setActive}
            {...this.state}
          />
          <UserSection
            setActive={this.setActive}
            {...this.state}
          />
        </div>

      <MessageSection
        {...this.state}
      />
    </div>
  );
}
});
