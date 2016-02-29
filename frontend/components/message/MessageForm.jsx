var React = require('react');

var MessageForm = React.createClass({

  onSubmit: function(e){
    e.preventDefault();
    var node = this.refs.message;
    var message = node.value;
    this.props.addMessage(message);
    node.value = '';
  },

  render: function(){
    var input;
    if(this.props.activeChannel.id !== undefined){
      input = (
        <input
          ref='message'
          type='text'
          className='form-control'
          placeholder='Add Message...' />
      )
    }
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          {input}
        </div>
      </form>
    )
  }
});


module.exports = MessageForm;
