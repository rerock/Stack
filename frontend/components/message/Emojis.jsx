var React = require('react');
var EmojiReact = require('react-emoji-react').default;
var ReactDOM = require('react-dom');

var Emojis = React.createClass({
  getInitialState: function () {
    var emojis = this.props.initialEmojis.map(function(emoji){
      return {
        name: emoji.split(":").join(""),
        count: 1
      };
    });
    return({
      emojis: emojis
    });
  },

  onReaction: function(name) {
    var emojis = this.state.emojis.map( function(emoji) {
      if (emoji.name === name) {
        emoji.count += 1;
      }
      return emoji;
    });
    console.log(name);
    this.setState({emojis: emojis });
  },

  onEmojiClick: function(name) {
    var emojis = this.state.emojis.concat([{name, count: 1}]);
    console.log(name);
    this.setState({emojis: emojis });
  },

  render: function() {
    var self = this;
    return (
      <div className="emojis">
        <EmojiReact
          reactions={this.state.emojis}
          onReaction={function(name){self.onReaction(name);}}
          onEmojiClick={function(name){self.onEmojiClick(name);}}
          />
      </div>
    );
  }
})

module.exports = Emojis;
