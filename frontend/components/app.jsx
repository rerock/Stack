var React = require('react');
var ChannelSection = require('./channel/ChannelSection.jsx');
var MessageSection = require('./messages/MessageSection.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return({
        channels: [],
        messages: [],
        activeChannel: {},
      });
  },

  onMessageAdd: function(message){
    var messages = this.state.messages;
    messages.push(message);
    this.setState({messages: messages});
  },

  onAddChannel: function(channel){
    var channels = this.state.channels;
    channels.push(channel);
    this.setState({channels: channels});
  },

  setChannel: function(activeChannel){
    this.setState({activeChannel: activeChannel});
    this.setState({messages: []});
  },

  render: function () {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel}
            setChannel={this.setChannel}
          />
        </div>
      <MessageSection
        {...this.state}
        addMessage={this.addMessage.bind}
      />
    </div>
  )}
});
