import React, { Component } from 'react';
import io from 'socket.io-client';
import jquery from 'jquery';


const ChatInput = () => {
  return (
  <div>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
  </div>
  )
}

export { ChatInput }