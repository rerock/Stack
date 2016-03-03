var React = require('react');

var ChannelsListItem = React.createClass({

  onClick: function(e) {
    e.preventDefault();
    var setActive = this.props.setActive;
    var channelId = this.props.channel.id;
    this.props.setActive("Channel", channelId);
  },

  render: function () {
    var channel = this.props.channel;
    var activeChannel = this.props.active.receivable_id;
    var active = channel.id === activeChannel ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick}>{channel.title}</a>
      </li>
    );
  }
});

module.exports = ChannelsListItem;
