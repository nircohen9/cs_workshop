import asyncio
import websockets

# Define the server's IP address and port
HOST = "localhost"
PORT = 8000

# Define the WebSocket server handler
async def server_handler(websocket, path):
    try:
        # Receive messages from the client
        async for message in websocket:
            print("Received message from client:", message)

            # Send the received message back to the client
            await websocket.send(message)

    except (websockets.exceptions.ConnectionClosedError, websockets.exceptions.ConnectionClosedOK) as e:
        print("WebSocket connection closed:", str(e))

# Start the WebSocket server
async def start_server():
    server = await websockets.serve(server_handler, HOST, PORT)
    print("WebSocket server started.")

    # Run the event loop to start the server
    await server.wait_closed()

# Create and run a new event loop
loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)
loop.run_until_complete(start_server())


# import asyncio
# import websockets

# # Define the server's IP address and port
# HOST = "localhost"
# PORT = 8000

# # Define the WebSocket server handler
# async def server_handler(websocket, path):
#     try:
#         # Receive messages from the client
#         async for message in websocket:
#             print("Received message from client:", message)

#             # Process the message as needed
#             # ...

#             # Send a response back to the client
#             response_message = "Message received successfully!"
#             await websocket.send(response_message)

#     except websockets.exceptions.ConnectionClosedError:
#         print("WebSocket connection closed.")

# # Start the WebSocket server
# start_server = websockets.serve(server_handler, HOST, PORT)

# # Run the event loop to start the server
# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()

# import asyncio
# import websockets

# # Define the server's IP address and port
# HOST = "localhost"
# PORT = 8000

# # Define the WebSocket server handler
# async def server_handler(websocket, path):
#     # Receive messages from the client
#     async for message in websocket:
#         print("Received message:", message)

#         # Process the message as needed
#         # ...

#         # Send a response back to the client
#         response_message = "Message received successfully!"
#         await websocket.send(response_message)

# # Start the WebSocket server
# start_server = websockets.serve(server_handler, HOST, PORT)

# # Run the event loop to start the server
# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()

# import http.server
# import socketserver
# import json

# # Define the server's IP address and port
# HOST = "localhost"
# PORT = 8000

# # Create a custom handler by extending the BaseHTTPRequestHandler
# class MyHandler(http.server.BaseHTTPRequestHandler):
#     def do_GET(self):
#         # Customize the response if needed
#         # For example, you can modify headers or process the request data
#         # before sending the response.
#         print("Received GET request")
#         self.send_response(200)
#         self.send_header("Content-type", "text/plain")
#         self.end_headers()
#         response_message = "GET request received successfully!"
#         self.wfile.write(response_message.encode("utf-8"))

#     def do_POST(self):
#         content_length = int(self.headers["Content-Length"])
#         post_data = self.rfile.read(content_length)

#         try:
#             # Convert the received data to a Python object
#             message_data = json.loads(post_data.decode("utf-8"))
#             message = message_data["message"]

#             # Process the message as needed
#             print("Received message:", message)

#             # Send a response back to the client
#             self.send_response(200)
#             self.send_header("Content-type", "text/plain")
#             self.end_headers()
#             response_message = "Message received successfully!"
#             self.wfile.write(response_message.encode("utf-8"))

#         except json.JSONDecodeError:
#             self.send_response(400)
#             self.send_header("Content-type", "text/plain")
#             self.end_headers()
#             response_message = "Invalid JSON data received!"
#             self.wfile.write(response_message.encode("utf-8"))

# # Create a server instance with the custom handler
# server = socketserver.TCPServer((HOST, PORT), MyHandler)

# # Start the server
# print(f"Server started on http://{HOST}:{PORT}")
# server.serve_forever()
