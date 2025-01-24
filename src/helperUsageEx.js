import React, { useEffect, useState } from 'react';
import { sendDataToBackend, getDataFromBackend } from './apiHelper';

function App() {
    const [message, setMessage] = useState('');
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
                const data = await getDataFromBackend('/');
                setMessage(data); // Assuming your backend's GET '/' returns a string
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSendData = async () => {
        const payload = { name: 'React User', role: 'Frontend Developer' };

        try {
            const response = await sendDataToBackend('/api/data', payload);
            setResponseData(response);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <div>
            <h1>React App with Express Backend</h1>
            <p>{message}</p>
            <button onClick={handleSendData}>Send Data to Backend</button>
            {responseData && (
                <div>
                    <h3>Response from Backend:</h3>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;