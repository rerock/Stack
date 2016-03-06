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
    var active = ''
    if ( channel.id === activeChannel  && this.props.active.receivable_type === 'Channel'){
      active = 'active';
    }

    return (
      <li className={active} onClick={this.onClick}>
        {'#  '+channel.title}
      </li>
    );
  }
});

module.exports = ChannelsListItem;
