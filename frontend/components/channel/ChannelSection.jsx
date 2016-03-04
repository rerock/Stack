var React = require('react');
var ChannelsForm = require('./ChannelsForm');
var ChannelsList = require('./ChannelsList');
var ChannelStore = require('../../stores/ChannelStore');
var ChannelActions = require('../../actions/channel/ChannelActions');

var ChannelSection = React.createClass({
  getInitialState: function () {
    return({
        channels: ChannelStore.all(),
      });
  },

  createChannel: function(channel){
    // ChannelStore.create(channel);
    channel.team_id=this.props.team_id;
    ChannelActions.createChannel(channel);
  },

  _channelsChanged: function () {
    this.setState({channels: ChannelStore.all()});
  },

  componentWillMount: function(){
    var pusher = new Pusher('112508624b4e735a4749', {
      encrypted: true
    });
    this.pusher_my_chans = pusher.subscribe('my_channels');
  },

  componentDidMount: function(){
    // ChannelStore.addChangeHandler(this._channelsChanged);
    ChannelStore.addListener(this._channelsChanged);
    ChannelActions.fetchChannels(this.props.team_id);
    this.pusher_my_chans.bind('new_channel', this.forward_channels);
    // ChannelStore.fetch();
    //cannot do this right here
    // this.setState({channels: ChannelStore.all()});
  },

  forward_channels: function(chan){
    // Todo I should move this into the dispatcher in the message store
    // so it doesn't have to do a useless call when I already have the data
    ChannelActions.fetchChannels(this.props.team_id);
  },

  render: function () {
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>CHANNELS</strong>
        </div>
        <div className='panel-body channels'>
          <ChannelsList
            channels={this.state.channels}
            setActive={this.props.setActive}
            {...this.props}
            />
          <ChannelsForm create={this.createChannel}/>
        </div>
      </div>
    );
  }
});

module.exports = ChannelSection;
