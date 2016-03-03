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
      <li className='message'>
        <h5 className="message-author-name">{author}</h5>
        <i className="message-time">{createdAt}</i>
        <div className='message-text'>{message.text}</div>
      </li>
    )
  }
});


module.exports = MessageListItem;
