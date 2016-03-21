var React = require('react');
var MessageListItem = require('./MessageListItem.jsx');

var MessageList = React.createClass({
  render: function(){
    var self=this;
    return (
      <ul className="message-list">
        {
          this.props.messages.map( function(message) {
            debugger;
            return <MessageListItem
              key={message.id}
              message={message}
              create={self.createMessage}
              {...self.props}
            />
          })
        }
      </ul>
    );
  }
});

module.exports = MessageList;
