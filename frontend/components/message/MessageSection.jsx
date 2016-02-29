var React = require('react');
var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var MessageStore = require('../../stores/MessageStore');
var MessageActions = require('../../actions/message/MessageActions');

var MessageSection = React.createClass({
  render(){
    var activeChannel = this.props.activeChannel;
    return (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'><strong>{activeChannel.name || 'Select A Channel'}</strong></div>
        <div className='panel-body messages'>
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
    )
  }
});

module.exports = MessageSection;
