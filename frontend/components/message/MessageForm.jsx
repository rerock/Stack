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
    if (this.state.text.substring(0,7) === "/giphy "){
      var query = this.state.text.substr(7);
      var self = this;
      var gif_data = $.get({
        url: "http://api.giphy.com/v1/gifs/search",
        data: {
          api_key: "dc6zaTOxFJmzC",
          q: query,
          limit: 1
        },
        success: function(response){
          var newMsg = self.state;
          var image_url = response.data[0].images.original.url;
          // debugger;
          self.props.create(newMsg, image_url);
          self.setState({text:""});
        }
      });
    } else {
      this.props.create(this.state, "");
      this.setState({text:""});
    }
  },

  render: function(){
    return (
      <form onSubmit={this.formSubmitted} className='form-group'>
        <input type="text" onChange={this.inputChanged} placeholder="Type your message" value={this.state.text} className="message-composer"/>
      </form>
    )
  }
});


module.exports = MessageForm;
