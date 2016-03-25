var React = require('react');
var UserStore = require('../../stores/UserStore');
var Emojis = require('./Emojis');
var EmojiReact = require('react-emoji');

var VoteEmojis = [":banana:", ":rocket:", ":penguin:", ":cactus:", ":angel:", ":football:", ":broken_heart:"];

var MessageListItem = React.createClass({

  mixins: [EmojiReact],

  render: function(){
    var message = this.props.message;
    var createdAt = new Date(message.created_at).toLocaleTimeString();
    var author_id = message.sender_id;
    var author = UserStore.getByUserID(author_id)[0].handle;
    var pro_pic = UserStore.getByUserID(author_id)[0].avatar_url;
    var image = "";
    var emojis = [];
    if (message.img_url) {
      image = <a href={message.img_url}>
          <img className="giphies" src={message.img_url}/>
        </a>
    }
    if(message.text.substring(0,6) === "/vote "){
      var choices = message.text.substring(6);
      choices = choices.trim().split(/[ ,]+/);
      emojis = VoteEmojis.slice(0,choices.length);
      var res = "/vote ";
      for (var i = 0; i < choices.length; i ++){
        res = res.concat("  " + choices[i] + " = " + emojis[i]);
      }
      message.text = res;
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
            <Emojis
              initialEmojis={emojis}
              {...this.props}
              />
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
