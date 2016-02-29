var React = require('react');

var MessageForm = React.createClass({
  getInitialState: function(){
    return {
      text: ""
    };
  },

  inputChanged: function(e){
    this.setState({text: e.target.value});
  },

  formSubmitted: function(e){
    e.preventDefault();
    this.props.create(this.state);
  },

  render: function(){
    return (
      <form onSubmit={this.formSubmitted} className='form-group'>
        <input type="text" onChange={this.inputChanged} placeholder="Message" value={this.state.text} />
        <input type="submit" value="send your message!"/>
      </form>
    )
  }
});


module.exports = MessageForm;
