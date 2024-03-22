//import React from 'react';
//import "./button.css";
//TODO - import React, { useState, useEffect } from 'react';
//import WebSocketService from "./tools/websocket/WebSocketService";

import React from "react";
import Chat from './component/main_page/chat_box/chat';

/*
const WebSocketComponent = () => {
  const [message, setMessage] = useState("");
  const [webSocketService, setWebSocketService] = useState(null);

  useEffect(() => {
    const wsService = new WebSocketService();
    setWebSocketService(wsService);

    return () => {
      wsService.closeConnection();
    };
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (webSocketService && message.trim() !== "") {
      webSocketService.sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}; 

// Define a functional component
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a functional component.</p>
    </div>
  );
}

function Test_Button(props){
  return(
    <div>
      <button className='Button'>{props.name}!</button>
    </div>
  );
}

function Test_Form(props){

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return(
    <div>
      <form>
        <label for="fname">First name:</label><br></br>
        <input 
        type="text" 
        id="fname" 
        name="fname" 
        value={inputValue} 
        onChange={handleInputChange}></input><br></br>
        <label for="lname">Last name:</label><br></br>
        <input type="text" id="Lname" name="Lname"></input><br></br>
      </form>
      <p>Value of the text box: {inputValue}</p>
    </div>
  );
}
*/
// Usage of the functional component
const App = () => {

  return (
    <div>
      <h1>WebSocket Chat App</h1>
      <Chat />
    </div>
  );
};

export default App;



