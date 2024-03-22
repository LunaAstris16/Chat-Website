# server.py

import asyncio
import websockets

# Store references to all connected clients
connected_clients = set()

async def handle_websocket(websocket, path):
    print("Client connected")
    
    # Add the current client to the set of connected clients
    connected_clients.add(websocket)
    
    try:
        # Keep the connection open to handle incoming messages
        async for message in websocket:
            print(f"Received message: {message}")

            # Broadcast the received message to all connected clients
            for client in connected_clients:
                if client != websocket:
                    await client.send(f"Echo: {message}")
    except websockets.exceptions.ConnectionClosedError:
        pass
    finally:
        print("Client disconnected")
        
        # Remove the disconnected client from the set of connected clients
        connected_clients.remove(websocket)

# Create a WebSocket server
start_server = websockets.serve(handle_websocket, "localhost", 8700)

# Run the server indefinitely
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()


