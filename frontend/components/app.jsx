var React = require('react');
var ChannelSection = require('./channel/ChannelSection.jsx');
var MessageSection = require('./message/MessageSection.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    var initialState = this.props.routes[0].routerProps;
    return({
        team_id: initialState.team_id,
        user_id: initialState.user_id,
        activeChannel: {},
      });
  },

  setChannel: function(activeChannel){
    this.setState({activeChannel: activeChannel});
  },

  render: function () {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            addChannel={this.addChannel}
            setChannel={this.setChannel}
            {...this.state}
          />
        </div>
      <MessageSection
        addMessage={this.addMessage}
        {...this.state}
      />
    </div>
  )}
});
