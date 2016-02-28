var React = require('react');
var ChannelsForm = require('./ChannelsForm');
var ChannelsList = require('./ChannelsList');
var ChannelStore = require('../../stores/ChannelStore');
var ChannelActions = require('../../actions/channel/ChannelActions');

var ChannelSection = React.createClass({
  getInitialState: function () {
    var initialState = this.props.routes[0].routerProps;
    initialState.channels =  ChannelStore.all();
    return initialState;
  },

  createChannel: function(channel){
    // ChannelStore.create(channel);
    channel.team_id=this.state.team_id;
    ChannelActions.createChannel(channel);
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
          {(this.state.channels.length > 0 ? <ChannelsList channels={this.state.channels}/> : "No channels")}
      </div>
    );
  }
});

module.exports = ChannelSection;
