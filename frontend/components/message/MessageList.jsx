var React = require('react');
var moment = require('moment');
var MessageListItem = require('./MessageListItem.jsx');

var MessageList = React.createClass({
  render: function(){
    var self=this;
    var messages_by_date = groupBy(this.props.messages, function(item){
      return [new Date(item.created_at).toLocaleDateString()];
    });
    
    return (
      <ul className="message-list">
        {
          messages_by_date.map( function(messages) {
            var out = messages.map( function(message){
              return <MessageListItem
                key={message.id}
                message={message}
                create={self.createMessage}
                {...self.props}
              />
            });
            var date = (
              <li className="date"><span>{moment(new Date(messages[0].created_at)).format("MMMM Do")}</span></li>
            );
            out.unshift(date)
            return out;
          })
        }
      </ul>
    );
  }
});

module.exports = MessageList;


function groupBy( array , f )
{
  var groups = {};
  array.forEach( function( o )
  {
    var group = JSON.stringify( f(o) );
    groups[group] = groups[group] || [];
    groups[group].push( o );
  });
  return Object.keys(groups).map( function( group )
  {
    return groups[group];
  })
};
