var React = require('react');
var UserStore = require('../../stores/UserStore');

var MessageListItem = React.createClass({
  render: function(){
    var message = this.props.message;
    var createdAt = new Date(message.created_at).toLocaleTimeString();
    var author_id = message.sender_id;
    var author = UserStore.getByUserID(author_id)[0].handle;
    return (
      <li className='message'>
        <h5 className="message-author-name">{author}</h5>
          <div className="message-time">
            {createdAt}
          </div>
        <div className='message-text'>{message.text}</div>
      </li>
    )
  }
});


module.exports = MessageListItem;
