var pusher = new Pusher('0058e2662732d2e15e94', {
  encrypted: true
});


  //
  // active: {receivable_type: ''},
  //

var pusher_chat = pusher.subscribe(this.state.active[Object.keys(this.state.active)[0]]);


require 'pusher'

pusher_client = Pusher.new(
  app_id: '184370',
  key: '0058e2662732d2e15e94',
  secret: '3ffa29a1b0bb8d2fea33'
);

class MessageController < ApplicationController
  def msgFwd
    pusher_client.trigger('', 'my_event', {:message => 'hello world'})
  end
end
