var React = require('react');
var ChannelsListItem = require('./ChannelListItem');

var ChannelsList = React.createClass({
  render: function () {
    var self=this;
    return (
      <ul>{
        this.props.channels.map(function(channel){
          return <ChannelsListItem
            key={channel.id}
            channel={channel}
            setActive={self.props.setActive}
            {...self.props}
          />
        })
      }</ul>
    );
  }
});

module.exports = ChannelsList;
