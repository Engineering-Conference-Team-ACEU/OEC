const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9000; // Define your backend server's port

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies (built-in since Express 4.16)
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// API routes
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.json({ message: 'Data received successfully', receivedData: data });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});