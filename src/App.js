//import React from 'react';
import "./button.css";
import React, { useState, useEffect } from 'react';
import WebSocketService from "./tools/websocket/WebSocketService";

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

// Usage of the functional component
function App() {
  return (
    <div>
      <MyComponent name="Timothy" />
      <Test_Button name="Hello" />
      <Test_Form/>
      <WebSocketComponent/>
    </div>
  );
}

export default App;

//export default function MyApp() {
//  const [count, setCount] = useState(0);
//
// function handleClick() {
//   setCount(count + 1);
// }
//
// return (
//   <div>
//     <h1>Counters that update together</h1>
//     <MyButton_together count={count} onClick={handleClick} />
//     <MyButton_together count={count} onClick={handleClick} />
//     <MyButton_seperate count={count} onClick={handleClick} />
//     <MyButton_seperate count={count} onClick={handleClick} />
//     <Header_Text/>
//   </div>
// );
//

//function MyButton_together({ count, onClick }) {
//  return (
//    <button className="button" onClick={onClick}>
//      Clicked {count} times
//    </button>
//  );
//}
//
//function MyButton_seperate() {
//  const [count, setCount] = useState(0);
//
//  function handleClick() {
//    setCount(count + 1);
//  }
//
//  return (
//    <button className="button" onClick={handleClick}>
//      Clicked {count} times
//    </button>
//  );
//}
