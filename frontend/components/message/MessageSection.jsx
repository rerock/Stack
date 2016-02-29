var React = require('react');
var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var MessageStore = require('../../stores/MessageStore');
var MessageActions = require('../../actions/message/MessageActions');

var MessageSection = React.createClass({
  getInitialState: function () {
    return({
        messages: [],
      });
  },

  createMessage: function(message){
    // MessageStore.create(message);
    message.sender_id = this.props.user_id;
    message.receivable_id = this.props.activeChannel.id;
    message.receivable_type = "Channel";
    MessageActions.createMessage(message);
  },

  _messagesChanged: function () {
    this.setState({messages: MessageStore.all()});
  },

  componentDidMount: function(){
    this.getMessages();
  },

  getMessages: function(){
    MessageStore.addListener(this._messagesChanged);
    MessageActions.fetchMessages(this.props.activeChannel.id, "Channel");
  },

  render(){
    var activeChannel = this.props.activeChannel;
    return (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'><strong>{activeChannel.name || 'Select A Channel'}</strong></div>
        <div className='panel-body messages'>
          <MessageList
            messages={this.state.messages}
            {...this.props}
          />
          <MessageForm
            create={this.createMessage}
            {...this.props}
          />
        </div>
      </div>
    )
  }
});

module.exports = MessageSection;
