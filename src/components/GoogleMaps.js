import React, { useEffect, useState } from 'react';

// Fetch data from your API
const fetchData = async () => {
    try {
        const response = await fetch('/api/locations'); // Replace with your actual API endpoint
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Return null or handle the error as needed
    }
};


const GoogleMaps = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const getLocations = async () => {
            const data = await fetchData();
            if (data) {
                setLocations(data);
            }
        };

        getLocations();
    }, []);

    useEffect(() => {
        if (locations.length === 0) return;

        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: locations[0].latitude, lng: locations[0].longitude },
            zoom: 8,
        });

        locations.forEach((location) => {
            new window.google.maps.Marker({
                position: { lat: location.latitude, lng: location.longitude },
                map: map,
                title: location.name,
            });
        });
    }, [locations]);

    return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
};

export default GoogleMaps;