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
    message.receivable_type = this.props.active.receivable_type;
    message.receivable_id = this.props.active.receivable.id;
    MessageActions.createMessage(message, message.receivable_id, message.receivable_type);
  },

  _messagesChanged: function (nextProps) {
    var receivable_type = this.props.active.receivable_type;
    var receivable = this.props.active.receivable;
    if (nextProps){
      receivable_type = nextProps.active.receivable_type;
      receivable = nextProps.active.receivable;
    }
    if (receivable_type === "Channel") {
      this.setState(
        {messages: MessageStore.getByChannel(receivable)}
      );
    } else {
      this.setState(
        {messages: MessageStore.getByUser(receivable)}
      );
    }
  },

  componentDidMount: function(){
    MessageStore.addListener(this._messagesChanged);
  },

  forward_message: function(msg){
    var new_messages = this.state.messages;
    new_messages.push(msg);
    this.setState({messages: new_messages});
  },

  componentWillReceiveProps: function(nextProps) {
    var receivable_type = nextProps.active.receivable_type;
    var receivable_id = nextProps.active.receivable.id;
    MessageActions.fetchMessages(receivable_id, receivable_type);
    if( receivable_id !== this.props.active.receivable.id ||
      receivable_type !== this.props.active.receivable_type
     ){
      this._messagesChanged(nextProps);
    }
    nextProps.pusher_chan.bind('forward_message', this.forward_message);
  },

  render: function(){
    var activeType = this.props.active.receivable_type;
    var name;
    if (activeType === "Channel") {
      name = "Messages in Channel " + this.props.active.receivable.title;
    } else if (activeType === "User") {
      name = "Private Message with " + this.props.active.receivable.handle;
    } else {
      name = "Select a Channel/User";
    }

    return (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'>
          <strong>{name}</strong>
        </div>
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
