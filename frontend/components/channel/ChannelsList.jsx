var React = require('react');
var ChannelsListItem = require('./ChannelListItem');

var ChannelsList = React.createClass({
  render: function () {
    return (
      <ul>
        {
          this.props.channels.map(function(channel){
            return <ChannelsListItem key={channel.id} channel={channel}/>
          })
        }
      </ul>
    );
  }
});

module.exports = ChannelsList;
