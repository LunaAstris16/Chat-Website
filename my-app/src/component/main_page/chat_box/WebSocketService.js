// WebSocketService.js

class WebSocketService {
  constructor() {
    this.socket = null;
    this.messagesCallback = null;
  }

  connect(messagesCallback) {
    this.socket = new WebSocket('ws://0.0.0.0:8700');

    this.socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    this.socket.onmessage = (event) => {
      const newMessage = event.data;
      if (this.messagesCallback) {
        this.messagesCallback(newMessage);
      }
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.messagesCallback = messagesCallback;
  }

  sendMessage(message) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket is not connected.');
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }
}

export default WebSocketService;
