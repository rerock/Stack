var React = require('react');
var fecha = require('fecha');
var UserStore = require('../../stores/UserStore');

var MessageListItem = React.createClass({
  render: function(){
    var message = this.props.message;
    var createdAt = fecha.format(new Date(message.created_at), 'HH:mm:ss MM/DD/YY');
    var author_id = message.sender_id;
    var author = UserStore.getByUserID(author_id)[0].handle;
    return (
      <li className='messageitem'>
        <div className='author'>
          <strong>{author}</strong>
          <i className='timestamp'>{createdAt}</i>
        </div>
        <div className='body' key={message.id}>{message.text}</div>
      </li>
    )
  }
});


module.exports = MessageListItem;
