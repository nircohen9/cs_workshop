import os
import asyncio
import websockets
from google.cloud import bigquery_connection_v1 as bq_connection
from google.cloud import bigquery

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = './credentials.json'

# Initialize the BigQuery client
client2 = bigquery.Client()

def process_datasets():
    datasets = client2.list_datasets()
    for dataset in datasets:
        print(f"Dataset ID: {dataset.dataset_id}")
        data = client2.get_dataset(dataset.dataset_id)  # get dataset from dataset_id
        # Process the dataset as needed
        # ...

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

# Perform the dataset processing before starting the server
process_datasets()

# Create and run a new event loop
loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)
loop.run_until_complete(start_server())

