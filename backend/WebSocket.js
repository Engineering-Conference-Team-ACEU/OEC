const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Function to broadcast new reports to all connected clients
const broadcast = (data) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
};

// Simulating new reports being added to the database
setInterval(() => {
    const newReport = {
        location: 'Hamilton',
        message: 'New disaster report in Hamilton!',
    };
    broadcast(newReport);
}, 10000); // Broadcast a new report every 10 seconds

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});