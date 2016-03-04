var React = require('react');
var UserStore = require('../../stores/UserStore');

var MessageListItem = React.createClass({
  render: function(){
    var message = this.props.message;
    var createdAt = new Date(message.created_at).toLocaleTimeString();
    var author_id = message.sender_id;
    var author = UserStore.getByUserID(author_id)[0].handle;

    var image = "";
    if (message.img_url) {
      image = <img src={message.img_url}/>;
    }

    var name_class = parseInt(this.props.user_id) === message.sender_id ?
      "message-data" : "other-message-data"
    var messages_class = parseInt(this.props.user_id) === message.sender_id ?
      "my-message" : "other-message"

    return (
      <li className='message group'>
        <div className={name_class + " message-time-stamp"}>
          <span className="message-data-name" >{author}</span> &nbsp; &nbsp;
          <span className="message-data-time" >{createdAt}</span>
        </div>

        <div className="message-content group">
          <div className={messages_class+ " message-item"}>
            {message.text}
          </div>
        </div>
        <div className={name_class}>
          {image}
        </div>
      </li>
    )
  }
});


module.exports = MessageListItem;
