var React = require('react');
var ChannelsForm = require('./ChannelsForm');
var ChannelsList = require('./ChannelsList');
var ChannelStore = require('../../stores/ChannelStore');
var ChannelActions = require('../../actions/channel/ChannelActions');

var ChannelSection = React.createClass({
  getInitialState: function () {
    var initialState = this.props.routes[0].routerProps;
    return {
      team_id: initialState.team_id,
      user_id: initialState.user_id,
      channels: ChannelStore.all(),
      active_channel: ChannelStore.all()[0]
    };
  },

  createChannel: function(channel){
    // ChannelStore.create(channel);
    channel.team_id=this.state.team_id;
    ChannelActions.createChannel(channel);
  },

  setChannel(activeChannel) {
    console.log("asdf");
    this.setState({activeChannel: activeChannel});
    //TODO: Get Channels Message
  },

  _channelsChanged: function () {
    this.setState({channels: ChannelStore.all()});
  },

  componentDidMount: function(){
    // ChannelStore.addChangeHandler(this._channelsChanged);
    ChannelStore.addListener(this._channelsChanged);
    ChannelActions.fetchChannels(this.state.team_id);
    // ChannelStore.fetch();
    //cannot do this right here
    // this.setState({channels: ChannelStore.all()});
  },

  render: function () {
    return (
      <div>
          <ChannelsForm create={this.createChannel}/>
          <ChannelsList
            channels={this.state.channels}
            setChannel={this.setChannel}
          />
      </div>
    );
  }
});

module.exports = ChannelSection;
