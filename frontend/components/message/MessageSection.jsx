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
    MessageActions.createMessage(message, this.props.activeChannel.id, "Channel");
  },

  _messagesChanged: function (nextProps) {
    var activeChannel = this.props.activeChannel;
    if (nextProps){
      activeChannel = nextProps.activeChannel;
    }
    this.setState(
      {messages: MessageStore.getByChannel(activeChannel)}
    );
  },

  componentDidMount: function(){
    MessageStore.addListener(this._messagesChanged);
  },

  componentWillReceiveProps: function(nextProps) {
    MessageActions.fetchMessages(nextProps.activeChannel.id, "Channel");
    if( nextProps.activeChannel.id !== this.props.activeChannel.id ){
      this._messagesChanged(nextProps);
    }
  },

  render(){
    var activeChannel = this.props.activeChannel;
    return (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'><strong>{activeChannel.name}</strong></div>
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
