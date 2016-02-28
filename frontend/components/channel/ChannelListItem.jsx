var React = require('react');

var ChannelsListItem = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.channel.title}
      </div>
    );
  }
});

module.exports = ChannelsListItem;
