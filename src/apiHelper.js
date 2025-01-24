import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Replace with your backend URL if deployed

// Helper function to send a POST request
export const sendDataToBackend = async (endpoint, data) => {
    try {
        const response = await axios.post(`${BASE_URL}${endpoint}`, data);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error sending data to backend:', error);
        throw error; // Propagate the error for further handling
    }
};

// Helper function to send a GET request
export const getDataFromBackend = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error getting data from backend:', error);
        throw error; // Propagate the error for further handling
    }
};