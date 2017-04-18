import React, { Component } from 'react';
import io from 'socket.io-client';
import jquery from 'jquery';

$(function () {
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
});
const ChatInput = () => {
  return (
  <div>
   <div className="container"></div>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
  </div>
  )
}

export { ChatInput }