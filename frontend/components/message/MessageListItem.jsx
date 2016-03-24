var React = require('react');
var UserStore = require('../../stores/UserStore');
var Emojis = require('./Emojis');
var EmojiReact = require('react-emoji');

var MessageListItem = React.createClass({

  mixins: [EmojiReact],

  render: function(){
    var message = this.props.message;
    var createdAt = new Date(message.created_at).toLocaleTimeString();
    var author_id = message.sender_id;
    var author = UserStore.getByUserID(author_id)[0].handle;
    var pro_pic = UserStore.getByUserID(author_id)[0].avatar_url;
    var image = "";
    if (message.img_url) {
      image = <a href={message.img_url}>
          <img className="giphies" src={message.img_url}/>
        </a>
    }

    var name_class = parseInt(this.props.user_id) === message.sender_id ?
      "message-data" : "other-message-data"
    var messages_class = parseInt(this.props.user_id) === message.sender_id ?
      "my-message" : "other-message"
    return (
      <li className='message group'>
        <div className={name_class + " message-time-stamp"}>
          <img className="profile_picture" src={pro_pic}/>
          <span className="message-data-name" >{author}</span> &nbsp; &nbsp;
          <span className="message-data-time" >{createdAt}</span>
        </div>

        <div className="message-content group">
          <div className={messages_class+ " message-item"}>
            {EmojiReact.emojify(message.text)}
          </div>
          <Emojis
            {...this.props}
            />
        </div>
        <div className={name_class}>
          {image}
        </div>
      </li>
    )
  }
});


module.exports = MessageListItem;
