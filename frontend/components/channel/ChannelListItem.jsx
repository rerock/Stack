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
    var active = this.props.active
    var activeChannel = this.props.active.receivable;
    var active = channel === activeChannel ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick}>{channel.title}</a>
      </li>
    );
  }
});

module.exports = ChannelsListItem;
