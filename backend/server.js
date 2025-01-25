import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

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

// Example call to sendEmailNotification
sendEmailNotification('recipient@example.com', 'Test Subject', 'Test email body');

app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.json({ message: 'Data received successfully', receivedData: data });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// Configure the email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'umerqamar0333@gmail.com',
        pass: 'kgjm ieyo gcts ovbx'
    }
});

// Function to send email notification
const sendEmailNotification = (to, subject, text) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending email:', error);
        }
        console.log('Email sent:', info.response);
    });
};


