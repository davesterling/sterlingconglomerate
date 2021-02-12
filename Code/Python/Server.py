import asyncio
import websockets

async def handle_connection(websocket, path):
    while True:
        message = await websocket.recv()
        # Process the received message as needed
        print(message)



asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()


import ssl

ssl_context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
ssl_context.load_cert_chain('/etc/pki/tls/certs/fullchain.pem', '/etc/pki/tls/certs/privkey.pem')

async def handle_connection(websocket, path):
    # Handle the WebSocket connection logic here

# Update the WebSocket server URL to use 'wss://' instead of 'ws://'
start_server = websockets.serve(handle_connection, 'wss://sterlingconglomerate.com', 8080, ssl=ssl_context)

# Start the event loop to run the WebSocket server
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
