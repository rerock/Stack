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

  componentDidMount: function(){
    // ChannelStore.addChangeHandler(this._channelsChanged);
    ChannelStore.addListener(this._channelsChanged);
    ChannelActions.fetchChannels(this.props.team_id);
    // ChannelStore.fetch();
    //cannot do this right here
    // this.setState({channels: ChannelStore.all()});
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
