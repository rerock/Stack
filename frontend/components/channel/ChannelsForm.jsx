var React = require('react');

var ChannelsForm = React.createClass({
  getInitialState: function(){
    return { title: "" };
  },
  inputChanged: function(e){
    this.setState({title: e.target.value});
  },
  formSubmitted: function(e){
    e.preventDefault();
    this.props.create(this.state);
  },
  render: function () {
    return (
      <form onSubmit={this.formSubmitted}>
        <input type="text" onChange={this.inputChanged} value={this.state.title}/>
        <input type="submit" value="create channel!"/>
      </form>
    );
  }
});

module.exports = ChannelsForm;
