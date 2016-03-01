var React = require('react');
var MessageListItem = require('./MessageListItem.jsx');

var MessageList = React.createClass({
  render: function(){
    var self=this;
    return (
      <ul>
        {
          this.props.messages.map( function(message) {
            return <MessageListItem
              key={message.id}
              message={message}
              {...self.props}
            />
          })
        }
      </ul>
    );
  }
});

module.exports = MessageList;
