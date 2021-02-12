const WebSocket = require('wss');
const { spawn } = require('child_process');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Event handler for WebSocket connection
wss.on('connection', (ws) => {
  // Event handler for receiving messages
  ws.on('message', (message) => {
    // Pass the received message to the Python script (io.py)
    const pythonProcess = spawn('python', ['io.py', message]);

    // Event handler for Python script output
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Received output from io.py: ${data}`);
    });
  });
});
