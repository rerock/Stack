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
    message.receivable_type = Object.keys(this.props.active)[0];
    message.receivable_id = this.props.active[message.receivable_type].id;
    MessageActions.createMessage(message, message.receivable_id, message.receivable_type);
  },

  _messagesChanged: function (nextProps) {
    var receivable_type = Object.keys(this.props.active)[0];
    var receivable = this.props.active[receivable_type];
    if (nextProps){
      receivable_type = Object.keys(nextProps.active)[0];
      receivable = nextProps.active[receivable_type];
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

  componentWillReceiveProps: function(nextProps) {
    var receivable_type = Object.keys(nextProps.active)[0]
    var receivable_id = nextProps.active[receivable_type].id
    MessageActions.fetchMessages(receivable_id, receivable_type);
    if( receivable_id !== this.props.active[Object.keys(this.props.active)[0]].id ||
      receivable_type !== Object.keys(this.props.active)[0]
     ){
      this._messagesChanged(nextProps);
    }
  },

  render: function(){
    var active = this.props.active[Object.keys(this.props.active)[0]];
    return (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'><strong>{active.name}</strong></div>
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
