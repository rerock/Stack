var React = require('react');
var ChannelsListItem = require('./ChannelListItem');

var ChannelsList = React.createClass({
  render: function () {
    var self=this;
    return (
      <div>
        <h3>{"Channels"}</h3>
        <ul>
          {
            this.props.channels.map(function(channel){
              return <ChannelsListItem
                key={channel.id}
                channel={channel}
                setChannel={self.props.setChannel}
              />
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = ChannelsList;
