var React = require('react');
var ChannelSection = require('./channel/ChannelSection.jsx');
var MessageSection = require('./message/MessageSection.jsx');
var UserSection = require('./user/UserSection.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    var initialState = this.props.routes[0].routerProps;
    return({
        team_id: initialState.team_id,
        user_id: initialState.user_id,
        user_name: initialState.user_name,
        active: {receivable_type: '', receivable: ''},
      });
  },

  setActive: function(receivable_type, receivable){
    var active = {};
    active.receivable_type = receivable_type;
    active.receivable = receivable;
    this.setState({ active: active});
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
