var EventEmitter= require('events').EventEmitter;

var Socket = function(){
  this.ws = new WebSocket();
  this.ee = new EventEmitter();
  ws.onmessage = this.message;
  ws.onopen = this.open;
  ws.onclose = this.close;
};

Socket.prototype.on = function(name, fn) {
  this.ee.on(name, fn);
};

Socket.prototype.off = function(name, fn){
  this.ee.removeListener(name, fn);
};

Socket.prototype.emit = function(name, data){
    var message = JSON.stringify({name, data});
    this.ws.send(message);
};

Socket.prototype.message = function(e){
  try{
    var message = JSON.parse(e.data);
    this.ee.emit(message.name, message.data);
  }
  catch(err){
    this.ee.emit('error', err);
  }
};

Socket.prototype.open = function(){
  this.ee.emit('connect');
};

Socket.prototype.close = function(){
  this.ee.emit('disconnect');
};

module.exports = Socket;
