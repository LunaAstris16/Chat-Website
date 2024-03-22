// WebSocketService.js

class WebSocketService {
    constructor() {
      this.socket = new WebSocket("ws://localhost:8700");
      this.socket.onopen = this.onOpen;
      this.socket.onmessage = this.onMessage;
      this.socket.onclose = this.onClose;
      this.socket.onerror = this.onError;
    }
  
    onOpen = () => {
      console.log("WebSocket connection established.");
    };
  
    onMessage = (event) => {
      console.log("Received message:", event.data);
      // Handle incoming messages here
    };
  
    onClose = () => {
      console.log("WebSocket connection closed.");
    };
  
    onError = (error) => {
      console.error("WebSocket error:", error);
    };
  
    sendMessage(message) {
      this.socket.send(message);
    }
  
    closeConnection() {
      this.socket.close();
    }
  }
  
  export default WebSocketService;
  