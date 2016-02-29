var React = require('react');

var ChannelsListItem = React.createClass({

  onClick: function(e) {
    e.preventDefault();
    var setChannel = this.props.setChannel;
    var channel = this.props.channel;
    this.props.setChannel(channel);
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
