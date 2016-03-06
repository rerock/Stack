var React = require('react');

var ChannelsForm = React.createClass({
  getInitialState: function(){
    return {
      title: ""
    };
  },

  inputChanged: function(e){
    this.setState({title: e.target.value});
  },

  formSubmitted: function(e){
    e.preventDefault();
    if (this.state.title) {
      this.props.create(this.state);
      this.setState({title:""});
    }
  },

  render: function () {
    return (
      <form onSubmit={this.formSubmitted} className="channelForm">
        <input type="text" onChange={this.inputChanged} placeholder="Channel Title" value={this.state.title} className="channel-composer"/>
      </form>
    );
  }
});

module.exports = ChannelsForm;
