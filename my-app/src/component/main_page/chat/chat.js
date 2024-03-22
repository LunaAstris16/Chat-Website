// chat.js

import React, { useState } from 'react';
import WebSocketService from './WebSocketService';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const webSocketService = new WebSocketService();

  const connectWebSocket = () => {
    webSocketService.connect((newMessage) => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });
  };

  const disconnectWebSocket = () => {
    webSocketService.disconnect();
  };

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      webSocketService.sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <div>
      <button onClick={connectWebSocket}>Connect</button>
      <button onClick={disconnectWebSocket}>Disconnect</button>
      <input
        type="text"
        value={inputMessage}
        onChange={handleInputChange}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
