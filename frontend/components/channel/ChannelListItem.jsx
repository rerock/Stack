var React = require('react');

var ChannelsListItem = React.createClass({

  onClick: function(e) {
    e.preventDefault();
    var setActive = this.props.setActive;
    var channel = this.props.channel;
    this.props.setActive("Channel", channel);
  },

  render: function () {
    var channel = this.props.channel;
    return (
      <li>
        <a onClick={this.onClick}>{channel.title}</a>
      </li>
    );
  }
});

module.exports = ChannelsListItem;
