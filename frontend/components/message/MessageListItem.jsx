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

    return (
      <li className='message'>
        <h5 className="message-author-name">{author} </h5>
        <span/>
        <h5 className="message-author-name">{createdAt} </h5>
        <div className='message-text'>
          <h5>{message.text}</h5>
          {image}
        </div>
      </li>
    )
  }
});


module.exports = MessageListItem;
