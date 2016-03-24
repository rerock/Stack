var React = require('react');
var EmojiReact = require('react-emoji-react').default;
var ReactDOM = require('react-dom');

var Emojis = React.createClass({
  getInitialState: function () {
    return({
      emojis: []
    });
  },

  onReaction: function(name) {
    var emojis = this.state.emojis.map( function(emoji) {
      if (emoji.name === name) {
        emoji.count += 1;
      }
      return emoji;
    });
    this.setState({emojis: emojis });
  },

  onEmojiClick: function(name) {
    var emojis = this.state.emojis;
    emojis = emojis.concat([{name, count: 1}]);
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
