var React = require('react');
var ReactDOM = require('react-dom');
var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var MessageStore = require('../../stores/MessageStore');
var MessageActions = require('../../actions/message/MessageActions');
var UserStore = require('../../stores/UserStore');
var ChannelStore = require('../../stores/ChannelStore');

var MessageSection = React.createClass({
  getInitialState: function () {
    return({
        messages: [],
      });
  },

  createMessage: function(message){
    message.sender_id = this.props.user_id;
    message.receivable_type = this.props.active.receivable_type;
    message.receivable_id = this.props.active.receivable_id;
    message.img_url = arguments[1];
    MessageActions.createMessage(message, message.receivable_id, message.receivable_type);
  },

  _messagesChanged: function () {
    var receivable_type = this.props.active.receivable_type;
    var receivable_id = this.props.active.receivable_id;
    if (receivable_type === "Channel") {
      this.setState(
        {messages: MessageStore.getByChannel(parseInt(receivable_id))}
      );
    } else if(receivable_type === "User") {
      this.setState(
        {messages: MessageStore.getByPM(parseInt(receivable_id), parseInt(this.props.user_id))}
      );
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var receivable_type = nextProps.active.receivable_type;
    var receivable_id = nextProps.active.receivable_id;
    if( receivable_id !== this.props.active.receivable_id ||
      receivable_type !== this.props.active.receivable_type
     ){
     MessageActions.fetchMessages(receivable_id, receivable_type, this.props.user_id);
    }
  },

  componentWillMount: function(){
    var pusher = new Pusher('112508624b4e735a4749', {
      encrypted: true
    });
    this.pusher_chan = pusher.subscribe('chat_channel');
  },

  componentDidMount: function(){
    this._scrollToBottom();
    MessageStore.addListener(this._messagesChanged);
    this.pusher_chan.bind('forward_message', this.forward_message);
  },

  componentDidUpdate: function() {
    this._scrollToBottom();
  },

  _scrollToBottom: function() {
    var ul = ReactDOM.findDOMNode(this.refs.messageList);
    ul.scrollTop = ul.scrollHeight;
  },

  forward_message: function(msg){
    // Todo I should move this into the dispatcher in the message store
    // so it doesn't have to do a useless call when I already have the data
    var receivable_type = this.props.active.receivable_type;
    var receivable_id = this.props.active.receivable_id;
    MessageActions.fetchMessages(receivable_id, receivable_type, this.props.user_id);
  },

  render: function(){
    var activeType = this.props.active.receivable_type;
    var name;
    if (this.props.user_id === this.props.active.receivable_id) {
      name = "# Private Notes to yourself"
    } else if (activeType === "Channel" && ChannelStore.getByChannelID(this.props.active.receivable_id)[0] ) {
      name = "# " + ChannelStore.getByChannelID(this.props.active.receivable_id)[0].title;
    } else if (activeType === "User" && UserStore.getByUserID(parseInt(this.props.active.receivable_id))[0]) {
      name = "@ " + UserStore.getByUserID(parseInt(this.props.active.receivable_id))[0].handle;
    }
    return (
      <div className='message-section'>
        <header className="header group">
          <div className="conversation-header">
            <h1 className="message-thread-heading">{name}</h1>
          </div>
        </header>
        <div className='panel-body-messages'>
          <MessageList
            messages={this.state.messages}
            create={this.createMessage}
            ref="messageList"
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
