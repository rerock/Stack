var React = require('react');
var fecha = require('fecha');

var MessageListItem = React.createClass({
  render: function(){
    var message = this.props.message;
    var createdAt = fecha.format(new Date(message.createdAt), 'HH:mm:ss MM/DD/YY');
    return (
      <li className='message'>
        <div className='author'>
          <strong>{message.sender_id}</strong>
          <i className='timestamp'>{createdAt}</i>
        </div>
        <div className='body'>{message.text}</div>
      </li>
    )
  }
});


module.exports = MessageListItem;
