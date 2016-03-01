var React = require('react');
var ChannelSection = require('./channel/ChannelSection.jsx');
var MessageSection = require('./message/MessageSection.jsx');
var UserSection = require('./user/UserSection.jsx');
var Socket = require('./socket');

module.exports = React.createClass({
  getInitialState: function () {
    var initialState = this.props.routes[0].routerProps;
    return({
        team_id: initialState.team_id,
        user_id: initialState.user_id,
        user_name: initialState.user_name,
        active: {receivable_type: ''},
        new_channels:[],
        new_messages: [],
        connected: false
      });
  },

  componentDidMount: function(){
    var ws = new WebSocket('ws://localhost:3000');
    var socket = Socket(ws);
    // this.socket = socket;
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('message add', this.onMessageAdd.bind(this));
    socket.on('channel add', this.onAddChannel.bind(this));
  },

  onConnect: function(){
    this.setState({connected: true});
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  },

  onDisconnect: function(){
    this.setState({connected: false});
  },

  onMessageAdd: function(message){
    var new_messages = this.state.new_messages;
    new_messages.push(message);
    this.setState({new_messages: new_messages});
  },

  addMessage: function(body){
    var active = this.state.active;
    var receivable_type = Object.keys(active)[0];
    var receivable = active[receivable_type];
    if (receivable_type === "Channel") {
      this.socket.emit('message add', {channelId: receivable, body});
    } else {
      this.socket.emit('message add', {userId: receivable, body});
    }
  },

  onAddChannel: function(channel){
    var new_channels = this.state.new_channels;
    new_channels.push(channel);
    this.setState({new_channels: channels});
  },

  addChannel: function(name){
    this.socket.emit('channel add', {name});
  },

  setActive: function(receivable_type, receivable){
    var active_infor = {};
    active_infor[receivable_type] = receivable;
    this.setState({ active: active_infor});
  },

  render: function () {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            setActive={this.setActive}
            {...this.state}
          />
          <UserSection
              setActive={this.setActive}
              {...this.state}
          />
        </div>
      <MessageSection
        addMessage={this.addMessage}
        {...this.state}
      />
    </div>
  );
}
});
