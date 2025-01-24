import React, { useState, useEffect } from 'react';
import '../styles/Search.css'; // Correct relative path to CSS
import { getFirestore, collection, query, where, getDocs, limit } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const searchLimit = 10;

const firebaseConfig = {
    apiKey: "AIzaSyCGO7IZLLUXlyGhl1im7sGkt1RYPBGGwjM",
    authDomain: "oec-web-cbb05.firebaseapp.com",
    projectId: "oec-web-cbb05",
    storageBucket: "oec-web-cbb05.firebasestorage.app",
    messagingSenderId: "397282574084",
    appId: "1:397282574084:web:bef837297047d6bcdfda51",
    measurementId: "G-E9MLJ1V7VT"
};

initializeApp(firebaseConfig);
const db = getFirestore();

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('Type');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const q = query(
            collection(db, 'disasters'),
            where(category, '==', searchTerm),
            limit(searchLimit)
        );
        const querySnapshot = await getDocs(q);
        const searchResults = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            votes: 0 // Initialize votes
        }));
        setResults(searchResults);
    };

    useEffect(() => {
        if (searchTerm) {
            handleSearch();
        }
    }, [searchTerm, category]);

    const handleVote = (id, delta) => {
        setResults(results.map(result => 
            result.id === id ? { ...result, votes: result.votes + delta } : result
        ));
    };

    const options = [
        'Type', 
        'Description', 
        'Detailed Description', 
        'Location', 
        'Time', 
        'Full Name', 
        'Email', 
        'Phone', 
        'Date Time', 
        'Affected Area', 
        'Specific Location', 
        'From Date', 
        'From Time', 
        'To Date', 
        'To Time', 
        'Fatalities Min', 
        'Fatalities Max', 
        'Injured Min', 
        'Injured Max', 
        'Evacuees Min', 
        'Evacuees Max', 
        'Cost Min', 
        'Cost Max'
    ];

    return (
        <section className="Search">
            <h2>Search Disasters</h2>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {options.map((field, index) => (
                        <option key={index} value={field}>{field}</option>
                    ))}
                </select>
                <div>
                    {results.map((result, index) => (
                        <div key={index}>
                            <h3>{result.Type}</h3>
                            <p>{result.Location.latitude}° N, {result.Location.longitude}° E</p>
                            <p>{result.Description}</p>
                            <p>{result['Detailed Description']}</p>
                            <p>{new Date(result.Time.seconds * 1000).toLocaleString()}</p>
                            <div>
                                <button onClick={() => handleVote(result.id, 1)}>Upvote</button>
                                <span>{result.votes}</span>
                                <button onClick={() => handleVote(result.id, -1)}>Downvote</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Search;